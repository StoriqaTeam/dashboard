use super::error::*;
use bigdecimal::{BigDecimal, Signed, ToPrimitive};
use failure::Fail;
use models::*;
use std::collections::HashMap;

#[derive(Clone)]
pub struct Accounts {
    pub block: i64,
    data: HashMap<TokenAddress, BigDecimal>,
    contract_address: TokenAddress,
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
pub struct TokenHoldersStats {
    buckets: Vec<Bucket>,
    tokenholders: u64,
    tokenholders_delta: Option<f64>,
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
                bucket.delta = Some(bucket.value / base_value);
            }
        }
        if base.tokenholders > 0 {
            self.tokenholders_delta = Some((self.tokenholders as f64) / (base.tokenholders as f64));
        }
    }
}

impl Accounts {
    pub fn new(contract_address: TokenAddress) -> Self {
        Accounts {
            block: 0,
            data: HashMap::new(),
            contract_address,
        }
    }

    pub fn get(&self, address: &TokenAddress) -> Option<BigDecimal> {
        self.data.get(address).cloned()
    }

    pub fn tokenholder_stats(
        &self,
        break_points: &[u64],
        last_transactions: &[Transaction],
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
            let value = self.data.get(&key).unwrap();
            let power: BigDecimal = 10u64.pow(18).into();
            let value: BigDecimal = value / power;
            let value = value.to_u64().ok_or(
                format_err!("{:?}, Bigdecimal {} -> u64", key, value.clone())
                    .context(ErrorKind::Arithmetics),
            )?;
            if value >= 1 {
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
        })
    }

    // expected sorted non-empty break_points
    fn get_break_point(&self, break_points: Vec<u64>, value: u64) -> u64 {
        for break_point in break_points {
            if value < break_point {
                return break_point;
            }
        }
        u64::max_value()
    }

    pub fn apply(&mut self, txs: &[Transaction], opetation: Operation) {
        let sign: BigDecimal = match opetation {
            Operation::Apply => 1.into(),
            Operation::Rollback => BigDecimal::from(-1),
        };
        for tx in txs {
            let Transaction {
                from_address,
                to_address,
                value,
                ..
            } = tx;
            if *from_address != self.contract_address {
                let balance = self.data.entry(from_address.clone()).or_insert(0u8.into());
                *balance -= value * sign.clone();
            }
            if *to_address != self.contract_address {
                let balance = self.data.entry(to_address.clone()).or_insert(0u8.into());
                *balance += value * sign.clone();
            }
        }
    }
}
