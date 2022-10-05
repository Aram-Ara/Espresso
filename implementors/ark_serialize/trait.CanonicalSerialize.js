(function() {var implementors = {};
implementors["espresso_core"] = [{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/genesis/struct.GenesisNote.html\" title=\"struct espresso_core::genesis::GenesisNote\">GenesisNote</a>","synthetic":false,"types":["espresso_core::genesis::GenesisNote"]},{"text":"impl&lt;KVHash&gt; CanonicalSerialize for <a class=\"enum\" href=\"espresso_core/kv_merkle_tree/enum.KVMerkleTerminalNode.html\" title=\"enum espresso_core::kv_merkle_tree::KVMerkleTerminalNode\">KVMerkleTerminalNode</a>&lt;KVHash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;KVHash: <a class=\"trait\" href=\"espresso_core/tree_hash/trait.KVTreeHash.html\" title=\"trait espresso_core::tree_hash::KVTreeHash\">KVTreeHash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;KVHash::<a class=\"associatedtype\" href=\"espresso_core/tree_hash/trait.KVTreeHash.html#associatedtype.BranchArityMinus1\" title=\"type espresso_core::tree_hash::KVTreeHash::BranchArityMinus1\">BranchArityMinus1</a> as AddLength&lt;KVHash::<a class=\"associatedtype\" href=\"espresso_core/tree_hash/trait.KVTreeHash.html#associatedtype.Digest\" title=\"type espresso_core::tree_hash::KVTreeHash::Digest\">Digest</a>, <a class=\"type\" href=\"https://docs.rs/typenum/1.15.0/typenum/generated/consts/type.U1.html\" title=\"type typenum::generated::consts::U1\">U1</a>&gt;&gt;::Output: ArrayLength&lt;<a class=\"enum\" href=\"espresso_core/kv_merkle_tree/enum.KVMerkleTree.html\" title=\"enum espresso_core::kv_merkle_tree::KVMerkleTree\">KVMerkleTree</a>&lt;KVHash&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["espresso_core::kv_merkle_tree::KVMerkleTerminalNode"]},{"text":"impl&lt;KVHash&gt; CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/kv_merkle_tree/struct.KVMerkleProof.html\" title=\"struct espresso_core::kv_merkle_tree::KVMerkleProof\">KVMerkleProof</a>&lt;KVHash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;KVHash: <a class=\"trait\" href=\"espresso_core/tree_hash/trait.KVTreeHash.html\" title=\"trait espresso_core::tree_hash::KVTreeHash\">KVTreeHash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;KVHash::<a class=\"associatedtype\" href=\"espresso_core/tree_hash/trait.KVTreeHash.html#associatedtype.BranchArityMinus1\" title=\"type espresso_core::tree_hash::KVTreeHash::BranchArityMinus1\">BranchArityMinus1</a> as AddLength&lt;KVHash::<a class=\"associatedtype\" href=\"espresso_core/tree_hash/trait.KVTreeHash.html#associatedtype.Digest\" title=\"type espresso_core::tree_hash::KVTreeHash::Digest\">Digest</a>, <a class=\"type\" href=\"https://docs.rs/typenum/1.15.0/typenum/generated/consts/type.U1.html\" title=\"type typenum::generated::consts::U1\">U1</a>&gt;&gt;::Output: ArrayLength&lt;<a class=\"enum\" href=\"espresso_core/kv_merkle_tree/enum.KVMerkleTree.html\" title=\"enum espresso_core::kv_merkle_tree::KVMerkleTree\">KVMerkleTree</a>&lt;KVHash&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["espresso_core::kv_merkle_tree::KVMerkleProof"]},{"text":"impl CanonicalSerialize for <a class=\"enum\" href=\"espresso_core/merkle_tree/enum.NodePos.html\" title=\"enum espresso_core::merkle_tree::NodePos\">NodePos</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.u8.html\">u8</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"espresso_core/merkle_tree/enum.NodePos.html\" title=\"enum espresso_core::merkle_tree::NodePos\">NodePos</a>&gt;,&nbsp;</span>","synthetic":false,"types":["espresso_core::merkle_tree::NodePos"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/merkle_tree/struct.MerklePathNode.html\" title=\"struct espresso_core::merkle_tree::MerklePathNode\">MerklePathNode</a>","synthetic":false,"types":["espresso_core::merkle_tree::MerklePathNode"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/merkle_tree/struct.MerklePath.html\" title=\"struct espresso_core::merkle_tree::MerklePath\">MerklePath</a>","synthetic":false,"types":["espresso_core::merkle_tree::MerklePath"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/merkle_tree/struct.NodeValue.html\" title=\"struct espresso_core::merkle_tree::NodeValue\">NodeValue</a>","synthetic":false,"types":["espresso_core::merkle_tree::NodeValue"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/merkle_tree/struct.MerkleCommitment.html\" title=\"struct espresso_core::merkle_tree::MerkleCommitment\">MerkleCommitment</a>","synthetic":false,"types":["espresso_core::merkle_tree::MerkleCommitment"]},{"text":"impl&lt;E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + CanonicalSerialize + CanonicalDeserialize&gt; CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/merkle_tree/struct.MerkleLeaf.html\" title=\"struct espresso_core::merkle_tree::MerkleLeaf\">MerkleLeaf</a>&lt;E&gt;","synthetic":false,"types":["espresso_core::merkle_tree::MerkleLeaf"]},{"text":"impl&lt;E&gt; CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/merkle_tree/struct.MerkleLeafProof.html\" title=\"struct espresso_core::merkle_tree::MerkleLeafProof\">MerkleLeafProof</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + CanonicalSerialize + CanonicalDeserialize,&nbsp;</span>","synthetic":false,"types":["espresso_core::merkle_tree::MerkleLeafProof"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/reward/struct.CollectedRewards.html\" title=\"struct espresso_core::reward::CollectedRewards\">CollectedRewards</a>","synthetic":false,"types":["espresso_core::reward::CollectedRewards"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/reward/struct.CollectRewardNote.html\" title=\"struct espresso_core::reward::CollectRewardNote\">CollectRewardNote</a>","synthetic":false,"types":["espresso_core::reward::CollectRewardNote"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/reward/struct.CollectRewardBody.html\" title=\"struct espresso_core::reward::CollectRewardBody\">CollectRewardBody</a>","synthetic":false,"types":["espresso_core::reward::CollectRewardBody"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/reward/struct.EligibilityWitness.html\" title=\"struct espresso_core::reward::EligibilityWitness\">EligibilityWitness</a>","synthetic":false,"types":["espresso_core::reward::EligibilityWitness"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/reward/struct.RewardNoteProofs.html\" title=\"struct espresso_core::reward::RewardNoteProofs\">RewardNoteProofs</a>","synthetic":false,"types":["espresso_core::reward::RewardNoteProofs"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/set_merkle_tree/set_hash/struct.Elem.html\" title=\"struct espresso_core::set_merkle_tree::set_hash::Elem\">Elem</a>","synthetic":false,"types":["espresso_core::set_merkle_tree::set_hash::Elem"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/set_merkle_tree/set_hash/struct.Hash.html\" title=\"struct espresso_core::set_merkle_tree::set_hash::Hash\">Hash</a>","synthetic":false,"types":["espresso_core::set_merkle_tree::set_hash::Hash"]},{"text":"impl CanonicalSerialize for <a class=\"enum\" href=\"espresso_core/set_merkle_tree/enum.SetMerkleTerminalNode.html\" title=\"enum espresso_core::set_merkle_tree::SetMerkleTerminalNode\">SetMerkleTerminalNode</a>","synthetic":false,"types":["espresso_core::set_merkle_tree::SetMerkleTerminalNode"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/set_merkle_tree/struct.SetMerkleProof.html\" title=\"struct espresso_core::set_merkle_tree::SetMerkleProof\">SetMerkleProof</a>","synthetic":false,"types":["espresso_core::set_merkle_tree::SetMerkleProof"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/stake_table/struct.StakingKey.html\" title=\"struct espresso_core::stake_table::StakingKey\">StakingKey</a>","synthetic":false,"types":["espresso_core::stake_table::StakingKey"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/stake_table/struct.StakingKeySignature.html\" title=\"struct espresso_core::stake_table::StakingKeySignature\">StakingKeySignature</a>","synthetic":false,"types":["espresso_core::stake_table::StakingKeySignature"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/stake_table/struct.ViewNumber.html\" title=\"struct espresso_core::stake_table::ViewNumber\">ViewNumber</a>","synthetic":false,"types":["espresso_core::stake_table::ViewNumber"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/stake_table/struct.StakeTableCommitment.html\" title=\"struct espresso_core::stake_table::StakeTableCommitment\">StakeTableCommitment</a>","synthetic":false,"types":["espresso_core::stake_table::StakeTableCommitment"]},{"text":"impl CanonicalSerialize for <a class=\"enum\" href=\"espresso_core/state/enum.EspressoTransaction.html\" title=\"enum espresso_core::state::EspressoTransaction\">EspressoTransaction</a>","synthetic":false,"types":["espresso_core::state::EspressoTransaction"]},{"text":"impl CanonicalSerialize for <a class=\"enum\" href=\"espresso_core/state/enum.EspressoTxnHelperProofs.html\" title=\"enum espresso_core::state::EspressoTxnHelperProofs\">EspressoTxnHelperProofs</a>","synthetic":false,"types":["espresso_core::state::EspressoTxnHelperProofs"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/state/struct.ElaboratedTransaction.html\" title=\"struct espresso_core::state::ElaboratedTransaction\">ElaboratedTransaction</a>","synthetic":false,"types":["espresso_core::state::ElaboratedTransaction"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/state/struct.Block.html\" title=\"struct espresso_core::state::Block\">Block</a>","synthetic":false,"types":["espresso_core::state::Block"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/state/struct.ElaboratedBlock.html\" title=\"struct espresso_core::state::ElaboratedBlock\">ElaboratedBlock</a>","synthetic":false,"types":["espresso_core::state::ElaboratedBlock"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/state/struct.BlockCommitment.html\" title=\"struct espresso_core::state::BlockCommitment\">BlockCommitment</a>","synthetic":false,"types":["espresso_core::state::BlockCommitment"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/state/struct.TransactionCommitment.html\" title=\"struct espresso_core::state::TransactionCommitment\">TransactionCommitment</a>","synthetic":false,"types":["espresso_core::state::TransactionCommitment"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/state/state_comm/struct.LedgerStateCommitment.html\" title=\"struct espresso_core::state::state_comm::LedgerStateCommitment\">LedgerStateCommitment</a>","synthetic":false,"types":["espresso_core::state::state_comm::LedgerStateCommitment"]},{"text":"impl&lt;T:&nbsp;CanonicalSerialize&gt; CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/state/struct.ArcSer.html\" title=\"struct espresso_core::state::ArcSer\">ArcSer</a>&lt;T&gt;","synthetic":false,"types":["espresso_core::state::ArcSer"]},{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_core/state/struct.ChainVariables.html\" title=\"struct espresso_core::state::ChainVariables\">ChainVariables</a>","synthetic":false,"types":["espresso_core::state::ChainVariables"]}];
implementors["espresso_validator"] = [{"text":"impl CanonicalSerialize for <a class=\"struct\" href=\"espresso_validator/struct.SecretKeySeed.html\" title=\"struct espresso_validator::SecretKeySeed\">SecretKeySeed</a>","synthetic":false,"types":["espresso_validator::SecretKeySeed"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()