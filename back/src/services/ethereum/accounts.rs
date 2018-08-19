use super::error::*;
use bigdecimal::{BigDecimal, Signed, ToPrimitive};
use failure::Fail;
use models::*;
use std::collections::HashMap;
use std::f64::MAX as F64_MAX;

#[derive(Clone)]
pub struct Accounts {
    pub block: i64,
    pub tokenholders_history: Vec<TokenHoldersCountPoint>,
    pub tokenholders_count_bucket_block_width: usize,
    data: HashMap<TokenAddress, f64>,
    contract_address: TokenAddress,
    tokenholder_stq_threshold: f64,
}

#[derive(Debug, Serialize, Clone)]
pub struct TokenHoldersCountPoint {
    pub block: i64,
    pub count: usize,
}

#[derive(Clone, Copy)]
pub enum Operation {
    Apply,
    Rollback,
}

#[derive(Debug, Serialize, Clone)]
pub struct Bucket {
    from: u64,
    to: u64,
    value: f64,
    delta: Option<f64>,
}

#[derive(Debug, Serialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct TokenHoldersStats {
    buckets: Vec<Bucket>,
    tokenholders: u64,
    tokenholders_delta: Option<i64>,
    tokenholders_history: Vec<TokenHoldersCountPoint>,
}

impl TokenHoldersStats {
    fn update_deltas(&mut self, base: TokenHoldersStats) {
        assert_eq!(
            self.buckets.len(),
            base.buckets.len(),
            "Got two buckets of diffent size: {} - {}",
            self.buckets.len(),
            base.buckets.len()
        );
        for (i, bucket) in self.buckets.iter_mut().enumerate() {
            let base_value = base.buckets[i].value;
            if base_value > 0.0 {
                bucket.delta = Some(bucket.value - base_value);
            }
        }
        if base.tokenholders > 0 {
            self.tokenholders_delta = Some(self.tokenholders as i64 - base.tokenholders as i64);
        }
    }
}

impl Accounts {
    pub fn new(
        contract_address: TokenAddress,
        tokenholders_count_bucket_block_width: usize,
        tokenholder_stq_threshold: f64,
    ) -> Self {
        Accounts {
            block: 0,
            data: HashMap::new(),
            contract_address,
            tokenholders_history: Vec::new(),
            tokenholders_count_bucket_block_width,
            tokenholder_stq_threshold,
        }
    }

    pub fn get(&self, address: &TokenAddress) -> Option<f64> {
        self.data.get(address).cloned()
    }

    pub fn tokenholder_stats(
        &self,
        break_points: &[u64],
        last_transactions: Vec<Transaction>,
    ) -> Result<TokenHoldersStats, Error> {
        let mut base = self.clone();
        base.apply(last_transactions, Operation::Rollback);
        let mut stats = self.tokenholder_stats_no_deltas(break_points)?;
        let base_stats = base.tokenholder_stats_no_deltas(break_points)?;
        stats.update_deltas(base_stats);
        Ok(stats)
    }

    fn tokenholder_stats_no_deltas(
        &self,
        break_points: &[u64],
    ) -> Result<TokenHoldersStats, Error> {
        let mut break_points = break_points.to_vec();
        break_points.sort();
        let mut store: HashMap<u64, Bucket> = HashMap::new();
        let mut from_point = 0;
        for to_point in break_points.iter() {
            let to_point = to_point.clone();
            store.insert(
                to_point,
                Bucket {
                    from: from_point,
                    to: to_point,
                    value: 0.0,
                    delta: None,
                },
            );
            from_point = to_point;
        }
        store.insert(
            u64::max_value(),
            Bucket {
                from: from_point,
                to: u64::max_value(),
                value: 0.0,
                delta: None,
            },
        );
        for key in self.data.keys() {
            let value = self.data.get(&key).cloned().unwrap();
            if value >= self.tokenholder_stq_threshold {
                let break_point = self.get_break_point(break_points.clone(), value);
                let value_mut_ref = store.get_mut(&break_point).unwrap();
                value_mut_ref.value += 1.0;
            }
        }
        let mut total = 0.0;
        let keys: Vec<u64> = store.keys().cloned().collect();
        for key in keys.iter() {
            total += store[key].value;
        }
        for key in keys.iter() {
            let value_mut_ref = store.get_mut(key).unwrap();
            value_mut_ref.value /= total;
        }
        let mut buckets: Vec<Bucket> = store.values().cloned().collect();
        buckets.sort_by_key(|bucket| bucket.to);
        Ok(TokenHoldersStats {
            buckets,
            tokenholders: total as u64,
            tokenholders_delta: None,
            tokenholders_history: self.tokenholders_history.clone(),
        })
    }

    // expected sorted non-empty break_points
    fn get_break_point(&self, break_points: Vec<u64>, value: f64) -> u64 {
        for break_point in break_points {
            if value < break_point as f64 {
                return break_point;
            }
        }
        u64::max_value()
    }

    pub fn apply(&mut self, mut txs: Vec<Transaction>, opetation: Operation) {
        txs.sort_by_key(|tx| tx.block);
        let sign: f64 = match opetation {
            Operation::Apply => 1.0,
            Operation::Rollback => -1.0,
        };
        let power: BigDecimal = 10u64.pow(18).into();
        let power_ref = &power;
        let mut prev_block_timestamp = self.block;
        for tx in txs {
            let Transaction {
                from_address,
                to_address,
                value,
                block,
                ..
            } = tx;
            match opetation {
                Operation::Apply => {
                    // as soon as the tx of new block arrives - push prev block tokenholders count
                    let current_block_timestamp =
                        block / (self.tokenholders_count_bucket_block_width as i64);
                    if current_block_timestamp > prev_block_timestamp {
                        let tokenholder_stq_threshold = self.tokenholder_stq_threshold;
                        let count = self
                            .data
                            .values()
                            .filter(|x| **x >= tokenholder_stq_threshold)
                            .count();
                        self.tokenholders_history
                            .push(TokenHoldersCountPoint { block, count });
                        prev_block_timestamp = current_block_timestamp;
                    }
                }
                _ => {}
            }

            if from_address != self.contract_address {
                let balance = self.data.entry(from_address.clone()).or_insert(0.0f64);
                let float_value: f64 = (value.clone() / power_ref.clone()).to_f64().expect(
                    &format!(
                        "Error casting Bigdecimal {} to f64",
                        value.clone() / power_ref.clone()
                    ),
                );
                *balance -= float_value * sign.clone();
            }
            if to_address != self.contract_address {
                let balance = self.data.entry(to_address.clone()).or_insert(0.0f64);
                let float_value: f64 = (value.clone() / power_ref.clone()).to_f64().expect(
                    &format!(
                        "Error casting Bigdecimal {} to f64",
                        value.clone() / power_ref.clone()
                    ),
                );
                *balance += float_value * sign.clone();
            }
            if block > self.block {
                self.block = block;
            }
        }

        // Push the last block
        if let Some(point) = self.tokenholders_history.iter().last().cloned() {
            if point.block != self.block {
                let tokenholder_stq_threshold = self.tokenholder_stq_threshold;
                let count = self
                    .data
                    .values()
                    .filter(|x| **x >= tokenholder_stq_threshold)
                    .count();
                self.tokenholders_history.push(TokenHoldersCountPoint {
                    block: self.block,
                    count,
                });
            }
        }
    }
}
