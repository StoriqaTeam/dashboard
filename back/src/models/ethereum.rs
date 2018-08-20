use bigdecimal::BigDecimal;
use schema::transactions;
use std::time::SystemTime;

#[derive(Debug, Serialize, Deserialize, PartialEq, Eq, Hash, Clone, DieselTypes)]
pub struct TokenAddress(String);

impl TokenAddress {
    pub fn new(address: String) -> Self {
        TokenAddress(address)
    }
}

#[derive(Debug, Serialize, Deserialize, Clone, Queryable)]
pub struct Transaction {
    pub id: i32,
    pub from_address: TokenAddress,
    pub to_address: TokenAddress,
    pub block: i64,
    pub value: BigDecimal,
    pub block_hash: String,
    pub transaction_hash: String,
    pub created_at: SystemTime,
    pub updated_at: SystemTime,
}

#[derive(Debug, Serialize, Deserialize, Clone, Insertable)]
#[table_name = "transactions"]
pub struct NewTransaction {
    pub from_address: TokenAddress,
    pub to_address: TokenAddress,
    pub block: i64,
    pub value: BigDecimal,
    pub block_hash: String,
    pub transaction_hash: String,
}
