#![deny(warnings)]
// Copyright (c) 2022 Espresso Systems (espressosys.com)
// This file is part of the Espresso library.

use async_std::sync::Arc;
use jf_cap::proof::{freeze, mint, transfer};
use key_set::{ProverKeySet, VerifierKeySet};
use lazy_static::lazy_static;
use reef::Ledger;

/// Height of the records Merkle tree
pub const MERKLE_HEIGHT: u8 = 20 /*H*/;

pub const SUPPORTED_TRANSFER_SIZES: [(usize, usize); 3] = [(1, 2), (2, 2), (3, 3)];
pub const SUPPORTED_FREEZE_SIZES: [usize; 1] = [2];

lazy_static! {
    pub static ref UNIVERSAL_PARAM: jf_cap::proof::UniversalParam =
        reef::cap::Ledger::srs().clone();
    pub static ref VERIF_CRS: Arc<VerifierKeySet> = {
        use jf_cap::TransactionVerifyingKey::*;
        Arc::new(VerifierKeySet {
            mint: Mint(
                mint::preprocess(&UNIVERSAL_PARAM, MERKLE_HEIGHT)
                    .expect("failed preprocess of mint circuit")
                    .1,
            ),
            xfr: SUPPORTED_TRANSFER_SIZES
                .iter()
                .map(|&(inputs, outputs)| {
                    Transfer(
                        transfer::preprocess(&UNIVERSAL_PARAM, inputs, outputs, MERKLE_HEIGHT)
                            .expect("failed preprocess of transfer circuit")
                            .1,
                    )
                })
                .collect(),
            freeze: SUPPORTED_FREEZE_SIZES
                .iter()
                .map(|&inputs| {
                    Freeze(
                        freeze::preprocess(&UNIVERSAL_PARAM, inputs, MERKLE_HEIGHT)
                            .expect("failed preprocess of freeze circuit")
                            .1,
                    )
                })
                .collect(),
        })
    };
    pub static ref PROVER_CRS: Arc<ProverKeySet<'static>> = {
        Arc::new(ProverKeySet {
            mint: mint::preprocess(&UNIVERSAL_PARAM, MERKLE_HEIGHT)
                .expect("failed preprocess of mint circuit")
                .0,
            xfr: SUPPORTED_TRANSFER_SIZES
                .iter()
                .map(|&(inputs, outputs)| {
                    transfer::preprocess(&UNIVERSAL_PARAM, inputs, outputs, MERKLE_HEIGHT)
                        .expect("failed preprocess of transfer circuit")
                        .0
                })
                .collect(),
            freeze: SUPPORTED_FREEZE_SIZES
                .iter()
                .map(|&inputs| {
                    freeze::preprocess(&UNIVERSAL_PARAM, inputs, MERKLE_HEIGHT)
                        .expect("failed preprocess of freeze circuit")
                        .0
                })
                .collect(),
        })
    };
}
