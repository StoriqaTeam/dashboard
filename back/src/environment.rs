use super::config::Config;
use clients::EthereumClient;
use diesel::pg::PgConnection;
use hyper::Client as HyperClient;
use hyper_tls::HttpsConnector;
use r2d2::Pool;
use r2d2_diesel::ConnectionManager;
use std::sync::Arc;
use types::*;

#[derive(Clone)]
pub struct Environment {
    pub config: Arc<Config>,
    pub http_client: Arc<Client>,
    pub ethereum_client: Arc<EthereumClient>,
    pub db_pool: Arc<DbPool>,
}

impl Environment {
    pub fn new(config: Config) -> Self {
        let mut connector = HttpsConnector::new(config.http.dns_threads).unwrap();
        connector.force_https(true);
        let client = Arc::new(HyperClient::builder().build(connector));
        let ethereum_client = EthereumClient::new(
            client.clone(),
            config.ethereum.api_key.clone(),
            config.ethereum.transfer_topic.clone(),
            config.ethereum.contract_address.clone(),
        );

        // Prepare database pool
        let database_url: String = config
            .server
            .database
            .parse()
            .expect("Database URL must be set in configuration");
        let manager = ConnectionManager::<PgConnection>::new(database_url);
        let db_pool = Pool::builder()
            .build(manager)
            .expect("Failed to create connection pool");

        Environment {
            config: Arc::new(config),
            http_client: client,
            ethereum_client: Arc::new(ethereum_client),
            db_pool: Arc::new(db_pool),
        }
    }
}
