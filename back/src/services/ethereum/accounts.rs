use super::error::*;
use bigdecimal::{BigDecimal, Signed, ToPrimitive};
use models::*;
use std::collections::HashMap;
use failure::Fail;

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

    pub fn histogram(&self, break_points: &[u64]) -> Result<Vec<Bucket>, Error> {
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
                format_err!("{:?}, Bigdecimal {} -> u64", key, value.clone()).context(ErrorKind::Arithmetics)
            )?;
            let break_point = self.get_break_point(break_points.clone(), value);
            let value_mut_ref = store.get_mut(&break_point).unwrap();
            value_mut_ref.value += 1.0;
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
        Ok(store.values().cloned().collect())
    }

    // expected sorted non-empty break_points
    fn get_break_point(&self, break_points: Vec<u64>, value: u64) -> u64 {
        let mut prev_point = break_points.get(0).cloned().expect("Non-empty breakpoints expected");
        for break_point in break_points {
            if value > break_point {
                return prev_point;
            }
            prev_point = break_point;
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
