//! Models for managing capitalization
use schema::capitalization;
use std::time::SystemTime;

#[derive(Debug, Serialize, Deserialize, Clone, Queryable)]
pub struct Capitalization {
    pub id: i32,
    pub time: SystemTime,
    pub value: f64,
}

#[derive(Debug, Serialize, Deserialize, Clone, Insertable)]
#[table_name = "capitalization"]
pub struct NewCapitalization {
    pub time: SystemTime,
    pub value: f64,
}
