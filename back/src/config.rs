use config_crate::{Config as RawConfig, ConfigError, Environment, File};

#[derive(Debug, Deserialize, Clone)]
pub struct Config {
    pub contract_address: String,
    pub transfer_topic: String,
    pub infura: Infura,
    pub http: Http,
}

#[derive(Debug, Deserialize, Clone)]
pub struct Infura {
    pub key: String,
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
