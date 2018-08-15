use std::env;

use config_crate::{Config as RawConfig, ConfigError, Environment, File};

#[derive(Debug, Deserialize, Clone)]
pub struct Config {
    pub ethereum: Ethereum,
    pub coinmarketcap: Coinmarketcap,
    pub http: Http,
    pub server: Server,
    pub fetcher: Fetcher,
}

/// Common server settings
#[derive(Debug, Deserialize, Clone)]
pub struct Server {
    pub host: String,
    pub port: String,
    pub database: String,
    pub thread_count: usize,
}

#[derive(Debug, Deserialize, Clone)]
pub struct Ethereum {
    pub storiqa_genesis_block: i64,
    pub contract_address: String,
    pub transfer_topic: String,
    pub api_key: String,
    pub fetcher_tick_seconds: usize,
    pub blocks_per_fetch: i64,
}

#[derive(Debug, Deserialize, Clone)]
pub struct Coinmarketcap {
    pub fetcher_tick_seconds: usize,
    pub points_count: usize,
}

#[derive(Debug, Deserialize, Clone)]
pub struct Fetcher {
    pub thread_count: u8,
}

#[derive(Debug, Deserialize, Clone)]
pub struct Http {
    pub dns_threads: usize,
}

impl Config {
    pub fn new() -> Result<Self, ConfigError> {
        let mut s = RawConfig::new();
        s.merge(File::with_name("config/config"))?;
        s.merge(File::with_name("config/secrets"))?;
        // Optional file specific for environment
        let env = env::var("RUN_MODE").unwrap_or_else(|_| "development".into());
        s.merge(File::with_name(&format!("config/{}", env.to_string())).required(false))?;
        s.merge(Environment::with_prefix("DASHBOARD"))?;
        s.try_into()
    }
}
