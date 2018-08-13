#[derive(Deserialize)]
pub struct BlockNumberResponse {
    pub result: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LogsResponse {
    pub address: String,
    pub topics: Vec<String>,
    pub data: String,
    pub block_number: String,
}
