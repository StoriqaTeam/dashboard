use config_crate::{Config as RawConfig, ConfigError, Environment, File};

#[derive(Debug, Deserialize, Clone)]
pub struct Config {
    pub ethereum: Ethereum,
    pub http: Http,
    pub server: Server,
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
    pub contract_address: String,
    pub transfer_topic: String,
    pub api_key: String,
    pub fetcher_tick_seconds: usize,
    pub blocks_per_fetch: i64,
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
        s.merge(Environment::with_prefix("DASHBOARD"))?;
        s.try_into()
    }
}
