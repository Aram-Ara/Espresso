// Copyright (c) 2022 Espresso Systems (espressosys.com)
// This file is part of the Espresso library.

use core::time::Duration;
use espresso_core::{
    state::{ElaboratedBlock, ValidatorState},
    StakingKey,
};
use hotshot::data::QuorumCertificate;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct PeerInfo {
    pub peer_id: StakingKey,
}

#[derive(Clone, Debug, Default, Deserialize, Serialize)]
pub struct MempoolInfo {
    pub transaction_count: u64,
    pub output_count: u64,
    pub memory_footprint: u64,
}

#[derive(Clone, Debug, Default, Deserialize, Serialize)]
pub struct RecordSetInfo {
    pub total: u64,
    pub spent: u64,
    pub unspent: u64,
}

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct Throughput {
    pub blocks_finalized: u64,
    pub transactions_finalized: u64,
    pub bytes_finalized: u64,
    pub time_operational: Duration,
}

#[derive(Debug, Default, Deserialize, Serialize)]
pub struct ValidatorStatus {
    pub peer_list: Vec<PeerInfo>,
    // TBD; these are going to correspond to active views, possibly want to also retain recent views?
    // We may or may not want a seperate map of QuorumCertificates for `qc/:index` endpoint.
    pub pending_blocks: HashMap<
        u64,
        (
            ElaboratedBlock,
            ValidatorState,
            QuorumCertificate<ValidatorState>,
        ),
    >,
    pub latest_block_id: u64, // id of latest block to reach DECIDE
    pub mempool_info: MempoolInfo,
    pub proposed_block_count: u64,
    pub decided_block_count: u64,
    pub abandoned_block_count: u64,
    pub cumulative_txn_count: u64,
    pub cumulative_size: u64,
    pub record_count: u64,
    pub nullifier_count: u64,
    pub time_operational: Duration,
}
