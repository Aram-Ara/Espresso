#![deny(warnings)]

use crate::state::VerifierKeySet;
use core::convert::TryFrom;
use core::fmt::Debug;
use jf_primitives::merkle_tree::FilledMTBuilder;
use jf_txn::{
    errors::TxnApiError,
    structs::{AssetDefinition, Nullifier, RecordCommitment, RecordOpening},
    transfer::TransferNote,
    txn_batch_verify, MerkleCommitment, MerkleFrontier, MerkleTree, NodeValue, TransactionNote,
};
use serde::{Deserialize, Serialize};
use snafu::Snafu;
use std::collections::{HashMap, HashSet, VecDeque};
use std::hash::Hash;
use std::sync::Arc;

pub const CAPE_MERKLE_HEIGHT: u8 = 20 /*H*/;
pub const CAPE_BURN_MAGIC_BYTES: &str = "TRICAPE burn";

#[derive(Debug, Clone, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub enum CapeTransaction {
    AAP(TransactionNote),
    Burn {
        xfr: Box<TransferNote>,
        ro: Box<RecordOpening>,
    },
}

impl CapeTransaction {
    pub fn nullifiers(&self) -> Vec<Nullifier> {
        match self {
            CapeTransaction::Burn { xfr, .. } => xfr.inputs_nullifiers.clone(),

            CapeTransaction::AAP(TransactionNote::Transfer(xfr)) => xfr.inputs_nullifiers.clone(),

            CapeTransaction::AAP(TransactionNote::Mint(mint)) => {
                vec![mint.input_nullifier]
            }

            CapeTransaction::AAP(TransactionNote::Freeze(freeze)) => {
                freeze.input_nullifiers.clone()
            }
        }
    }

    pub fn commitments(&self) -> Vec<RecordCommitment> {
        match self {
            CapeTransaction::Burn { xfr, .. } => {
                // All valid burn transactions have two outputs, but only the first one (the fee
                // change output) is added to the Merkle tree. The second output is burned.
                vec![xfr.output_commitments[0]]
            }
            CapeTransaction::AAP(note) => note.output_commitments(),
        }
    }
}

#[derive(Debug, Default, Clone, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub struct Erc20Code([u8; 32]);

#[derive(Debug, Default, Clone, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub struct EthereumAddr([u8; 20]);

#[derive(Debug, Clone, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub enum CapeOperation {
    SubmitBlock(Vec<CapeTransaction>),
    RegisterErc20 {
        asset_def: Box<AssetDefinition>,
        erc20_code: Erc20Code,
        sponsor_addr: EthereumAddr,
    },
    WrapErc20 {
        erc20_code: Erc20Code,
        src_addr: EthereumAddr,
        ro: Box<RecordOpening>,
    },
}

#[derive(Debug, Clone, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub enum CapeEvent {
    Erc20Deposited {
        erc20_code: Erc20Code,
        src_addr: EthereumAddr,
        ro: Box<RecordOpening>,
    },
    BlockCommitted {
        txns: Vec<CapeTransaction>,
        wraps: Vec<RecordCommitment>,
    },
}

#[derive(Debug, Clone, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub enum CapeEthEffect {
    ReceiveErc20 {
        erc20_code: Erc20Code,
        amount: u64,
        src_addr: EthereumAddr,
    },
    CheckErc20Exists {
        erc20_code: Erc20Code,
    },
    SendErc20 {
        erc20_code: Erc20Code,
        amount: u64,
        dst_addr: EthereumAddr,
    },
    Emit(CapeEvent),
}

#[derive(Debug, Snafu, Serialize, Deserialize, Clone)]
#[snafu(visibility = "pub(crate)")]
pub enum CapeValidationError {
    InvalidErc20Def {
        asset_def: Box<AssetDefinition>,
        erc20_code: Erc20Code,
        sponsor: EthereumAddr,
    },
    InvalidAAPDef {
        asset_def: Box<AssetDefinition>,
    },
    UnregisteredErc20 {
        asset_def: Box<AssetDefinition>,
    },
    IncorrectErc20 {
        asset_def: Box<AssetDefinition>,
        erc20_code: Erc20Code,
        expected_erc20_code: Erc20Code,
    },
    Erc20AlreadyRegistered {
        asset_def: Box<AssetDefinition>,
    },

    NullifierAlreadyExists {
        nullifier: Nullifier,
    },

    IncorrectBurnOpening {
        expected_comm: RecordCommitment,
        ro: Box<RecordOpening>,
    },

    IncorrectBurnField {
        xfr: Box<TransferNote>,
    },

    UnsupportedBurnSize {
        num_inputs: usize,
        num_outputs: usize,
    },
    UnsupportedTransferSize {
        num_inputs: usize,
        num_outputs: usize,
    },
    UnsupportedFreezeSize {
        num_inputs: usize,
    },

    BadMerkleRoot {},
    BadMerklePath {},

    CryptoError {
        // TxnApiError cannot be serialized, and, since it depends on many foreign error types which
        // are not Serialize, it is infeasible to make it serializable. Instead, if we have to
        // serialize this variant, we will serialize Ok(err) to Err(format(err)), and when we
        // deserialize we will at least preserve the variant CryptoError and a String representation
        // of the underlying error.
        #[serde(with = "crate::state::ser_display")]
        err: Result<Arc<TxnApiError>, String>,
    },
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct CapeRecordMerkleHistory(pub VecDeque<NodeValue>);

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct RecordMerkleCommitment(pub MerkleCommitment);

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct RecordMerkleFrontier(pub MerkleFrontier);

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct CapeLedgerState {
    pub state_number: u64, // "block height"
    // The current record Merkle commitment
    pub record_merkle_commitment: MerkleCommitment,
    // The current frontier of the record Merkle tree
    pub record_merkle_frontier: MerkleFrontier,
    // A list of recent record Merkle root hashes for validating slightly-out- of date transactions.
    pub past_record_merkle_roots: CapeRecordMerkleHistory,
    // TODO: should we include these?
    // pub prev_state: Option<StateCommitment>,
    // pub prev_block: BlockCommitment,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct CapeContractState {
    pub ledger: CapeLedgerState,
    pub verif_crs: VerifierKeySet, // hard-coded
    pub nullifiers: HashSet<Nullifier>,
    pub erc20_registrar: HashMap<AssetDefinition, (Erc20Code, EthereumAddr)>,
    pub erc20_deposited: HashMap<Erc20Code, u128>,
    pub erc20_deposits: Vec<RecordCommitment>,
}

#[allow(unused_variables)]
fn is_erc20_asset_def_valid(
    def: &AssetDefinition,
    erc20_code: &Erc20Code,
    sponsor: &EthereumAddr,
) -> bool {
    // TODO
    true
}

#[allow(unused_variables)]
fn is_aap_asset_def_valid(def: &AssetDefinition) -> bool {
    // TODO
    true
}

/// None => invalid field, should always be rejected
/// Some(None) => Valid field, not a burn
/// Some(Some(addr)) => Valid field, a burn sending to `addr`
fn extract_burn_dst(xfr: &TransferNote) -> Option<Option<EthereumAddr>> {
    let magic_bytes = CAPE_BURN_MAGIC_BYTES.as_bytes().to_vec();
    assert_eq!(magic_bytes.len(), 12);
    assert_eq!(EthereumAddr::default().0.len(), 20);

    let field_data = &xfr.aux_info.extra_proof_bound_data;

    match field_data.len() {
        0 => Some(None),
        32 => {
            if field_data[..12] != magic_bytes[..] {
                None
            } else {
                Some(Some(EthereumAddr(
                    <[u8; 20]>::try_from(&field_data[12..32]).unwrap(),
                )))
            }
        }
        _ => None,
    }
}

impl CapeContractState {
    // How many previous record Merkle tree root hashes the validator should remember.
    pub const RECORD_ROOT_HISTORY_SIZE: usize = 10;

    pub fn new(verif_crs: VerifierKeySet, record_merkle_frontier: MerkleTree) -> Self {
        Self {
            ledger: CapeLedgerState {
                state_number: 0u64,
                record_merkle_commitment: record_merkle_frontier.commitment(),
                record_merkle_frontier: record_merkle_frontier.frontier(),
                past_record_merkle_roots: CapeRecordMerkleHistory(VecDeque::with_capacity(
                    Self::RECORD_ROOT_HISTORY_SIZE,
                )),
            },
            verif_crs,
            nullifiers: HashSet::new(),
            erc20_registrar: HashMap::new(),
            erc20_deposited: HashMap::new(),
            erc20_deposits: Vec::new(),
        }
    }

    pub fn submit_operations(
        &self,
        ops: Vec<CapeOperation>,
    ) -> Result<(Self, Vec<CapeEthEffect>), CapeValidationError> {
        let mut new_state: CapeContractState = self.clone();
        let mut effects = vec![];

        new_state.ledger.state_number += 1;

        for o in ops {
            match o {
                CapeOperation::RegisterErc20 {
                    asset_def,
                    erc20_code,
                    sponsor_addr,
                } => {
                    if !is_erc20_asset_def_valid(&asset_def, &erc20_code, &sponsor_addr) {
                        return Err(CapeValidationError::InvalidErc20Def {
                            asset_def,
                            erc20_code,
                            sponsor: sponsor_addr,
                        });
                    }

                    if new_state.erc20_registrar.contains_key(&asset_def) {
                        return Err(CapeValidationError::Erc20AlreadyRegistered { asset_def });
                    }
                    new_state
                        .erc20_registrar
                        .insert(*asset_def, (erc20_code.clone(), sponsor_addr));
                    effects.push(CapeEthEffect::CheckErc20Exists { erc20_code });
                }
                CapeOperation::WrapErc20 {
                    erc20_code,
                    src_addr,
                    ro,
                } => {
                    let asset_def = ro.asset_def.clone();
                    let (expected_erc20_code, _sponsor) = new_state
                        .erc20_registrar
                        .get(&asset_def)
                        .ok_or_else(|| CapeValidationError::UnregisteredErc20 {
                            asset_def: Box::new(asset_def.clone()),
                        })?;
                    if expected_erc20_code != &erc20_code {
                        return Err(CapeValidationError::IncorrectErc20 {
                            asset_def: Box::new(asset_def),
                            erc20_code,
                            expected_erc20_code: expected_erc20_code.clone(),
                        });
                    }

                    new_state
                        .erc20_deposits
                        .push(RecordCommitment::from(ro.as_ref()));
                    *new_state
                        .erc20_deposited
                        .entry(erc20_code.clone())
                        .or_insert(0) += ro.amount as u128;
                    effects.push(CapeEthEffect::ReceiveErc20 {
                        erc20_code: erc20_code.clone(),
                        amount: ro.amount,
                        src_addr: src_addr.clone(),
                    });
                    effects.push(CapeEthEffect::Emit(CapeEvent::Erc20Deposited {
                        erc20_code,
                        src_addr,
                        ro,
                    }));
                }
                CapeOperation::SubmitBlock(txns) => {
                    // Step 1: filter txns for those with nullifiers that
                    // aren't already published
                    let filtered_txns = txns
                        .iter()
                        .filter(|t| {
                            t.nullifiers()
                                .into_iter()
                                .all(|x| !new_state.nullifiers.contains(&x))
                        })
                        .cloned()
                        .collect::<Vec<_>>();

                    let mut records_to_insert = vec![];
                    // TODO: the workflow code puts these after the things
                    // in the transactions -- which choice is correct?
                    let wrapped_commitments = new_state.erc20_deposits.clone();
                    records_to_insert.append(&mut new_state.erc20_deposits);

                    // past this point, if any validation error occurs the
                    // entire evm transaction rolls back, so we can mutate
                    // new_state in place.

                    // check everything except the plonk proofs, build up
                    // verif_keys

                    let mut notes = vec![];
                    let mut verif_keys = vec![];
                    let mut merkle_roots = vec![];
                    for t in filtered_txns.iter() {
                        // insert nullifiers
                        for n in t.nullifiers() {
                            if new_state.nullifiers.contains(&n) {
                                return Err(CapeValidationError::NullifierAlreadyExists {
                                    nullifier: n,
                                });
                            }
                            new_state.nullifiers.insert(n);
                        }

                        // TODO: fee-collection records
                        let (vkey, merkle_root, new_records, note) = match t {
                            CapeTransaction::AAP(TransactionNote::Mint(mint)) => {
                                if !is_aap_asset_def_valid(&mint.mint_asset_def) {
                                    return Err(CapeValidationError::InvalidAAPDef {
                                        asset_def: Box::new(mint.mint_asset_def.clone()),
                                    });
                                }

                                (
                                    &new_state.verif_crs.mint,
                                    mint.aux_info.merkle_root,
                                    vec![mint.chg_comm, mint.mint_comm],
                                    TransactionNote::Mint(mint.clone()),
                                )
                            }

                            CapeTransaction::Burn { xfr, ro } => {
                                let num_inputs = xfr.inputs_nullifiers.len();
                                let num_outputs = xfr.output_commitments.len();

                                // TODO: is this correct?
                                if (num_inputs, num_outputs) != (2, 2) {
                                    return Err(CapeValidationError::UnsupportedBurnSize {
                                        num_inputs,
                                        num_outputs,
                                    });
                                }

                                let expected_comm = xfr.output_commitments[1];
                                let actual_comm = RecordCommitment::from(ro.as_ref());
                                if expected_comm != actual_comm {
                                    return Err(CapeValidationError::IncorrectBurnOpening {
                                        expected_comm,
                                        ro: ro.clone(),
                                    });
                                }

                                let asset_def = ro.asset_def.clone();

                                let (erc20_code, _sponsor) = new_state
                                    .erc20_registrar
                                    .get(&asset_def)
                                    .ok_or_else(|| CapeValidationError::UnregisteredErc20 {
                                        asset_def: Box::new(asset_def),
                                    })?;

                                let dst_addr = if let Some(Some(dst)) = extract_burn_dst(xfr) {
                                    Some(dst)
                                } else {
                                    None
                                }
                                .ok_or_else(|| {
                                    CapeValidationError::IncorrectBurnField { xfr: xfr.clone() }
                                })?;

                                effects.push(CapeEthEffect::SendErc20 {
                                    erc20_code: erc20_code.clone(),
                                    amount: ro.amount,
                                    dst_addr,
                                });
                                new_state
                                    .erc20_deposited
                                    .get_mut(erc20_code)
                                    .unwrap()
                                    .checked_sub(ro.amount as u128)
                                    .unwrap();

                                let verif_key = new_state
                                    .verif_crs
                                    .xfr
                                    .key_for_size(num_inputs, num_outputs)
                                    .ok_or(CapeValidationError::UnsupportedBurnSize {
                                        num_inputs,
                                        num_outputs,
                                    })?;

                                (
                                    verif_key,
                                    xfr.aux_info.merkle_root,
                                    vec![xfr.output_commitments[0]],
                                    TransactionNote::Transfer(xfr.clone()),
                                )
                            }

                            CapeTransaction::AAP(TransactionNote::Transfer(note)) => {
                                let num_inputs = note.inputs_nullifiers.len();
                                let num_outputs = note.output_commitments.len();

                                if Some(None) != extract_burn_dst(note) {
                                    return Err(CapeValidationError::IncorrectBurnField {
                                        xfr: note.clone(),
                                    });
                                }

                                let verif_key = new_state
                                    .verif_crs
                                    .xfr
                                    .key_for_size(num_inputs, num_outputs)
                                    .ok_or(CapeValidationError::UnsupportedBurnSize {
                                        num_inputs,
                                        num_outputs,
                                    })?;

                                (
                                    verif_key,
                                    note.aux_info.merkle_root,
                                    note.output_commitments.clone(),
                                    TransactionNote::Transfer(note.clone()),
                                )
                            }

                            CapeTransaction::AAP(TransactionNote::Freeze(note)) => {
                                let num_inputs = note.input_nullifiers.len();
                                let num_outputs = note.output_commitments.len();

                                let verif_key = new_state
                                    .verif_crs
                                    .freeze
                                    .key_for_size(num_inputs, num_outputs)
                                    .ok_or(CapeValidationError::UnsupportedBurnSize {
                                        num_inputs,
                                        num_outputs,
                                    })?;

                                (
                                    verif_key,
                                    note.aux_info.merkle_root,
                                    note.output_commitments.clone(),
                                    TransactionNote::Freeze(note.clone()),
                                )
                            }
                        };

                        verif_keys.push(vkey);
                        if !new_state
                            .ledger
                            .past_record_merkle_roots
                            .0
                            .contains(&merkle_root)
                        {
                            return Err(CapeValidationError::BadMerkleRoot {});
                        }
                        merkle_roots.push(merkle_root);
                        records_to_insert.extend(new_records.into_iter());
                        notes.push(note);
                    }

                    // Batch PLONK verify
                    if !filtered_txns.is_empty() {
                        assert_eq!(filtered_txns.len(), notes.len());
                        assert_eq!(filtered_txns.len(), verif_keys.len());
                        assert_eq!(filtered_txns.len(), merkle_roots.len());

                        txn_batch_verify(
                            notes.as_slice(),
                            &merkle_roots,
                            new_state.ledger.state_number,
                            &verif_keys,
                        )
                        .map_err(|err| {
                            CapeValidationError::CryptoError {
                                err: Ok(Arc::new(err)),
                            }
                        })?;
                    }

                    // update the record tree
                    let (record_merkle_frontier, record_merkle_commitment) = {
                        let mut builder = FilledMTBuilder::from_frontier(
                            &new_state.ledger.record_merkle_commitment,
                            &new_state.ledger.record_merkle_frontier,
                        )
                        .ok_or(CapeValidationError::BadMerklePath {})?;

                        for rc in records_to_insert {
                            builder.push(rc.to_field_element());
                        }

                        builder.into_frontier_and_commitment()
                    };

                    if new_state.ledger.past_record_merkle_roots.0.len()
                        >= Self::RECORD_ROOT_HISTORY_SIZE
                    {
                        new_state.ledger.past_record_merkle_roots.0.pop_back();
                    }
                    new_state
                        .ledger
                        .past_record_merkle_roots
                        .0
                        .push_front(new_state.ledger.record_merkle_commitment.root_value);
                    new_state.ledger.record_merkle_commitment = record_merkle_commitment;
                    new_state.ledger.record_merkle_frontier = record_merkle_frontier;

                    effects.push(CapeEthEffect::Emit(CapeEvent::BlockCommitted {
                        wraps: wrapped_commitments,
                        txns: filtered_txns,
                    }))
                }
            }
        }

        Ok((new_state, effects))
    }
}
