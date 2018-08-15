use diesel::pg::PgConnection;
use hyper;
use hyper::client::HttpConnector;
use hyper_tls::HttpsConnector;
use r2d2::{Pool, PooledConnection};
use r2d2_diesel::ConnectionManager;

pub type Client = hyper::Client<HttpsConnector<HttpConnector>>;
pub type DbPool = Pool<ConnectionManager<PgConnection>>;
pub type Connection = PooledConnection<ConnectionManager<PgConnection>>;
