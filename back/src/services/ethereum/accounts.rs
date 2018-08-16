use bigdecimal::{BigDecimal, Signed};
use std::collections::HashMap;
use models::*;

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

impl Accounts {
    pub fn new(contract_address: TokenAddress) -> Self {
        Accounts {
            block: 0,
            data: HashMap::new(),
            contract_address,
        }
    }

    pub fn apply(&mut self, txs: &[Transaction], opetation: Operation) {
        let sign: BigDecimal = match opetation {
            Operation::Apply => 1.into(),
            Operation::Rollback => BigDecimal::from(-1),
        };
        for tx in txs {
            let Transaction { from_address, to_address, value, .. } = tx;
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
