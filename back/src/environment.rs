use super::config::Config;
use client::EthereumClient;
use hyper::Client as HyperClient;
use hyper_tls::HttpsConnector;
use std::sync::Arc;
use types::Client;

#[derive(Clone)]
pub struct Environment {
    pub config: Arc<Config>,
    pub http_client: Arc<Client>,
    pub ethereum_client: Arc<EthereumClient>,
}

impl Environment {
    pub fn new(config: Config) -> Self {
        let mut connector = HttpsConnector::new(config.http.dns_threads).unwrap();
        connector.force_https(true);
        let client = Arc::new(HyperClient::builder().build(connector));
        let ethereum_client = EthereumClient::new(
            client.clone(),
            config.infura.key.clone(),
            config.transfer_topic.clone(),
        );

        Environment {
            config: Arc::new(config),
            http_client: client,
            ethereum_client: Arc::new(ethereum_client),
        }
    }
}
