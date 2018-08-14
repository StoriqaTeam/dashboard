#[derive(Deserialize)]
pub struct BlockNumberResponse {
    pub result: String,
}

#[derive(Deserialize)]
pub struct LogsResponse {
    pub result: Vec<Log>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Log {
    pub address: String,
    pub topics: Vec<String>,
    pub data: String,
    pub block_number: String,
    pub block_hash: String,
    pub transaction_hash: String,
}
