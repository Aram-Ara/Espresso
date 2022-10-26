(function() {var implementors = {};
implementors["address_book"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ConfigError&gt; for <a class=\"enum\" href=\"address_book/error/enum.AddressBookError.html\" title=\"enum address_book::error::AddressBookError\">AddressBookError</a>","synthetic":false,"types":["address_book::error::AddressBookError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"address_book/error/enum.AddressBookError.html\" title=\"enum address_book::error::AddressBookError\">AddressBookError</a>","synthetic":false,"types":["address_book::error::AddressBookError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/toml/0.5/toml/de/struct.Error.html\" title=\"struct toml::de::Error\">Error</a>&gt; for <a class=\"enum\" href=\"address_book/error/enum.AddressBookError.html\" title=\"enum address_book::error::AddressBookError\">AddressBookError</a>","synthetic":false,"types":["address_book::error::AddressBookError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"enum\" href=\"https://docs.rs/bincode/1.3.3/bincode/error/enum.ErrorKind.html\" title=\"enum bincode::error::ErrorKind\">ErrorKind</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"address_book/error/enum.AddressBookError.html\" title=\"enum address_book::error::AddressBookError\">AddressBookError</a>","synthetic":false,"types":["address_book::error::AddressBookError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RequestError&gt; for <a class=\"enum\" href=\"address_book/error/enum.AddressBookError.html\" title=\"enum address_book::error::AddressBookError\">AddressBookError</a>","synthetic":false,"types":["address_book::error::AddressBookError"]}];
implementors["espresso_availability_api"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RequestError&gt; for <a class=\"enum\" href=\"espresso_availability_api/api/enum.Error.html\" title=\"enum espresso_availability_api::api::Error\">Error</a>","synthetic":false,"types":["espresso_availability_api::api::Error"]}];
implementors["espresso_catchup_api"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RequestError&gt; for <a class=\"enum\" href=\"espresso_catchup_api/api/enum.Error.html\" title=\"enum espresso_catchup_api::api::Error\">Error</a>","synthetic":false,"types":["espresso_catchup_api::api::Error"]}];
implementors["espresso_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"espresso_core/merkle_tree/enum.NodePos.html\" title=\"enum espresso_core::merkle_tree::NodePos\">NodePos</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.usize.html\">usize</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"espresso_core/merkle_tree/enum.NodePos.html\" title=\"enum espresso_core::merkle_tree::NodePos\">NodePos</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.u8.html\">u8</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.u8.html\">u8</a>&gt; for <a class=\"enum\" href=\"espresso_core/merkle_tree/enum.NodePos.html\" title=\"enum espresso_core::merkle_tree::NodePos\">NodePos</a>","synthetic":false,"types":["espresso_core::merkle_tree::NodePos"]},{"text":"impl&lt;E, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"espresso_core/merkle_tree/enum.LookupResult.html\" title=\"enum espresso_core::merkle_tree::LookupResult\">LookupResult</a>&lt;E, P&gt;&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.tuple.html\">(E, P)</a>&gt;&gt;","synthetic":false,"types":["core::option::Option"]},{"text":"impl&lt;E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + CanonicalSerialize + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + CanonicalDeserialize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"espresso_core/merkle_tree/struct.FilledMTBuilder.html\" title=\"struct espresso_core::merkle_tree::FilledMTBuilder\">FilledMTBuilder</a>&lt;E&gt;&gt; for <a class=\"struct\" href=\"espresso_core/merkle_tree/struct.MerkleTree.html\" title=\"struct espresso_core::merkle_tree::MerkleTree\">MerkleTree</a>&lt;E&gt;","synthetic":false,"types":["espresso_core::merkle_tree::MerkleTree"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;SerializationError&gt; for <a class=\"enum\" href=\"espresso_core/reward/enum.RewardError.html\" title=\"enum espresso_core::reward::RewardError\">RewardError</a>","synthetic":false,"types":["espresso_core::reward::RewardError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"espresso_core/set_merkle_tree/set_hash/struct.Hash.html\" title=\"struct espresso_core::set_merkle_tree::set_hash::Hash\">Hash</a>&gt; for Commitment&lt;<a class=\"enum\" href=\"espresso_core/set_merkle_tree/set_hash/enum.SetMerkleTreeNode.html\" title=\"enum espresso_core::set_merkle_tree::set_hash::SetMerkleTreeNode\">SetMerkleTreeNode</a>&gt;","synthetic":false,"types":["commit::Commitment"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;VRFPubKey&lt;BLSSignatureScheme&lt;<a class=\"struct\" href=\"espresso_core/stake_table/struct.VrfParam.html\" title=\"struct espresso_core::stake_table::VrfParam\">Parameters</a>&gt;&gt;&gt; for <a class=\"struct\" href=\"espresso_core/stake_table/struct.StakingKey.html\" title=\"struct espresso_core::stake_table::StakingKey\">StakingKey</a>","synthetic":false,"types":["espresso_core::stake_table::StakingKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"espresso_core/stake_table/struct.StakingKey.html\" title=\"struct espresso_core::stake_table::StakingKey\">StakingKey</a>&gt; for VRFPubKey&lt;BLSSignatureScheme&lt;<a class=\"struct\" href=\"espresso_core/stake_table/struct.VrfParam.html\" title=\"struct espresso_core::stake_table::VrfParam\">VrfParam</a>&gt;&gt;","synthetic":false,"types":["hotshot::traits::election::vrf::VRFPubKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;&lt;VRFPubKey&lt;BLSSignatureScheme&lt;<a class=\"struct\" href=\"espresso_core/stake_table/struct.VrfParam.html\" title=\"struct espresso_core::stake_table::VrfParam\">Parameters</a>&gt;&gt; as SignatureKey&gt;::PrivateKey&gt; for <a class=\"struct\" href=\"espresso_core/stake_table/struct.StakingKey.html\" title=\"struct espresso_core::stake_table::StakingKey\">StakingKey</a>","synthetic":false,"types":["espresso_core::stake_table::StakingKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;EncodedSignature&gt; for <a class=\"struct\" href=\"espresso_core/stake_table/struct.StakingKeySignature.html\" title=\"struct espresso_core::stake_table::StakingKeySignature\">StakingKeySignature</a>","synthetic":false,"types":["espresso_core::stake_table::StakingKeySignature"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"espresso_core/stake_table/struct.StakingKeySignature.html\" title=\"struct espresso_core::stake_table::StakingKeySignature\">StakingKeySignature</a>&gt; for EncodedSignature","synthetic":false,"types":["hotshot_types::traits::signature_key::EncodedSignature"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Commitment&lt;<a class=\"struct\" href=\"espresso_core/state/struct.ElaboratedBlock.html\" title=\"struct espresso_core::state::ElaboratedBlock\">ElaboratedBlock</a>&gt;&gt; for <a class=\"struct\" href=\"espresso_core/state/struct.ElaboratedBlockCommitment.html\" title=\"struct espresso_core::state::ElaboratedBlockCommitment\">ElaboratedBlockCommitment</a>","synthetic":false,"types":["espresso_core::state::ElaboratedBlockCommitment"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"espresso_core/state/struct.ElaboratedBlockCommitment.html\" title=\"struct espresso_core::state::ElaboratedBlockCommitment\">ElaboratedBlockCommitment</a>&gt; for Commitment&lt;<a class=\"struct\" href=\"espresso_core/state/struct.ElaboratedBlock.html\" title=\"struct espresso_core::state::ElaboratedBlock\">ElaboratedBlock</a>&gt;","synthetic":false,"types":["commit::Commitment"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"espresso_core/util/canonical/struct.CanonicalBytes.html\" title=\"struct espresso_core::util::canonical::CanonicalBytes\">CanonicalBytes</a>&gt; for <a class=\"struct\" href=\"espresso_core/state/struct.ElaboratedBlockCommitment.html\" title=\"struct espresso_core::state::ElaboratedBlockCommitment\">ElaboratedBlockCommitment</a>","synthetic":false,"types":["espresso_core::state::ElaboratedBlockCommitment"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"espresso_core/util/canonical/struct.CanonicalBytes.html\" title=\"struct espresso_core::util::canonical::CanonicalBytes\">CanonicalBytes</a>&gt; for <a class=\"struct\" href=\"espresso_core/state/struct.TransactionCommitment.html\" title=\"struct espresso_core::state::TransactionCommitment\">TransactionCommitment</a>","synthetic":false,"types":["espresso_core::state::TransactionCommitment"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Commitment&lt;<a class=\"struct\" href=\"espresso_core/state/struct.ValidatorState.html\" title=\"struct espresso_core::state::ValidatorState\">ValidatorState</a>&gt;&gt; for <a class=\"struct\" href=\"espresso_core/state/state_comm/struct.LedgerStateCommitment.html\" title=\"struct espresso_core::state::state_comm::LedgerStateCommitment\">LedgerStateCommitment</a>","synthetic":false,"types":["espresso_core::state::state_comm::LedgerStateCommitment"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"espresso_core/state/state_comm/struct.LedgerStateCommitment.html\" title=\"struct espresso_core::state::state_comm::LedgerStateCommitment\">LedgerStateCommitment</a>&gt; for Commitment&lt;<a class=\"struct\" href=\"espresso_core/state/struct.ValidatorState.html\" title=\"struct espresso_core::state::ValidatorState\">ValidatorState</a>&gt;","synthetic":false,"types":["commit::Commitment"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Amount&gt; for <a class=\"struct\" href=\"espresso_core/state/state_comm/struct.CommittableAmount.html\" title=\"struct espresso_core::state::state_comm::CommittableAmount\">CommittableAmount</a>","synthetic":false,"types":["espresso_core::state::state_comm::CommittableAmount"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"espresso_core/state/state_comm/struct.CommittableAmount.html\" title=\"struct espresso_core::state::state_comm::CommittableAmount\">CommittableAmount</a>&gt; for Amount","synthetic":false,"types":["jf_cap::structs::Amount"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"espresso_core/state/struct.ArcSer.html\" title=\"struct espresso_core::state::ArcSer\">ArcSer</a>&lt;T&gt;","synthetic":false,"types":["espresso_core::state::ArcSer"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"espresso_core/state/struct.ArcSer.html\" title=\"struct espresso_core::state::ArcSer\">ArcSer</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;T&gt;","synthetic":false,"types":["alloc::sync::Arc"]}];
implementors["espresso_esqs"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"espresso_status_api/api/enum.Error.html\" title=\"enum espresso_status_api::api::Error\">Error</a>&gt; for <a class=\"enum\" href=\"espresso_esqs/enum.ApiError.html\" title=\"enum espresso_esqs::ApiError\">ApiError</a>","synthetic":false,"types":["espresso_esqs::ApiError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"espresso_availability_api/api/enum.Error.html\" title=\"enum espresso_availability_api::api::Error\">Error</a>&gt; for <a class=\"enum\" href=\"espresso_esqs/enum.ApiError.html\" title=\"enum espresso_esqs::ApiError\">ApiError</a>","synthetic":false,"types":["espresso_esqs::ApiError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"espresso_catchup_api/api/enum.Error.html\" title=\"enum espresso_catchup_api::api::Error\">Error</a>&gt; for <a class=\"enum\" href=\"espresso_esqs/enum.ApiError.html\" title=\"enum espresso_esqs::ApiError\">ApiError</a>","synthetic":false,"types":["espresso_esqs::ApiError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"espresso_metastate_api/api/enum.Error.html\" title=\"enum espresso_metastate_api::api::Error\">Error</a>&gt; for <a class=\"enum\" href=\"espresso_esqs/enum.ApiError.html\" title=\"enum espresso_esqs::ApiError\">ApiError</a>","synthetic":false,"types":["espresso_esqs::ApiError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"espresso_validator_api/api/enum.Error.html\" title=\"enum espresso_validator_api::api::Error\">Error</a>&gt; for <a class=\"enum\" href=\"espresso_esqs/enum.ApiError.html\" title=\"enum espresso_esqs::ApiError\">ApiError</a>","synthetic":false,"types":["espresso_esqs::ApiError"]}];
implementors["espresso_metastate_api"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RequestError&gt; for <a class=\"enum\" href=\"espresso_metastate_api/api/enum.Error.html\" title=\"enum espresso_metastate_api::api::Error\">Error</a>","synthetic":false,"types":["espresso_metastate_api::api::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.u64.html\">u64</a>&gt; for <a class=\"enum\" href=\"espresso_metastate_api/api/enum.Error.html\" title=\"enum espresso_metastate_api::api::Error\">Error</a>","synthetic":false,"types":["espresso_metastate_api::api::Error"]}];
implementors["espresso_status_api"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RequestError&gt; for <a class=\"enum\" href=\"espresso_status_api/api/enum.Error.html\" title=\"enum espresso_status_api::api::Error\">Error</a>","synthetic":false,"types":["espresso_status_api::api::Error"]}];
implementors["espresso_validator"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"espresso_validator/struct.Ratio.html\" title=\"struct espresso_validator::Ratio\">Ratio</a>&gt; for (<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.u64.html\">u64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.u64.html\">u64</a>)","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.array.html\">; 32]</a>&gt; for <a class=\"struct\" href=\"espresso_validator/struct.SecretKeySeed.html\" title=\"struct espresso_validator::SecretKeySeed\">SecretKeySeed</a>","synthetic":false,"types":["espresso_validator::SecretKeySeed"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"espresso_validator/struct.SecretKeySeed.html\" title=\"struct espresso_validator::SecretKeySeed\">SecretKeySeed</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.array.html\">; 32]</a>","synthetic":false,"types":[]}];
implementors["espresso_validator_api"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RequestError&gt; for <a class=\"enum\" href=\"espresso_validator_api/api/enum.Error.html\" title=\"enum espresso_validator_api::api::Error\">Error</a>","synthetic":false,"types":["espresso_validator_api::api::Error"]}];
implementors["faucet_types"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;PersistenceError&gt; for <a class=\"enum\" href=\"faucet_types/enum.FaucetError.html\" title=\"enum faucet_types::FaucetError\">FaucetError</a>","synthetic":false,"types":["faucet_types::FaucetError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RequestError&gt; for <a class=\"enum\" href=\"faucet_types/enum.FaucetError.html\" title=\"enum faucet_types::FaucetError\">FaucetError</a>","synthetic":false,"types":["faucet_types::FaucetError"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()