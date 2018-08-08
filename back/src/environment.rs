use super::config::Config;
use hyper::Client as HyperClient;
use hyper_tls::HttpsConnector;
use std::sync::Arc;
use types::Client;

#[derive(Debug, Clone)]
pub struct Environment {
    pub config: Arc<Config>,
    pub http_client: Arc<Client>,
}

impl Environment {
    pub fn new(config: Config) -> Self {
        let mut connector = HttpsConnector::new(config.http.dns_threads).unwrap();
        connector.force_https(true);
        let client = HyperClient::builder().build(connector);

        Environment {
            config: Arc::new(config),
            http_client: Arc::new(client),
        }
    }
}
