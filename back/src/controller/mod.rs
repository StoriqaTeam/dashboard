//! `Controller` is a top layer that handles all http-related
//! stuff like reading bodies, parsing params, forming a response.
//! Basically it provides inputs to `Service` layer and converts outputs
//! of `Service` layer to http responses

pub mod routes;

use std::sync::Arc;

use chrono::prelude::*;
use diesel::connection::AnsiTransactionManager;
use diesel::pg::Pg;
use diesel::Connection;
use failure;
use futures::future;
use futures::Future;
use futures::IntoFuture;
use futures_cpupool::CpuPool;
use hyper::Body;
use hyper::Method;
use hyper::Request;
use r2d2::{ManageConnection, Pool};
use serde::ser::Serialize;
use serde_json;

use stq_router::RouteParser;

use self::routes::Route;
use config::Config;
use errors::ErrorKind;
use services::capitalization::{CapitalizationService, CapitalizationServiceImpl};

pub type ControllerFuture = Box<Future<Item = Body, Error = failure::Error> + Send>;

/// The meat of your application. Best used with RouteParser in utils.
pub trait Controller {
    fn call(&self, request: Request<Body>) -> ControllerFuture;
}

/// Controller handles route parsing and calling `Service` layer
#[derive(Clone)]
pub struct ControllerImpl<T, M>
where
    T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static,
    M: ManageConnection<Connection = T>,
{
    pub db_pool: Pool<M>,
    pub cpu_pool: CpuPool,
    pub route_parser: Arc<RouteParser<Route>>,
    pub config: Config,
}

unsafe impl<T, M> Send for ControllerImpl<T, M>
where
    T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static,
    M: ManageConnection<Connection = T>,
{}

impl<
        T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static,
        M: ManageConnection<Connection = T>,
    > ControllerImpl<T, M>
{
    /// Create a new controller based on services
    pub fn new(db_pool: Pool<M>, cpu_pool: CpuPool, config: Config) -> Self {
        let route_parser = Arc::new(routes::create_route_parser());
        Self {
            route_parser,
            db_pool,
            cpu_pool,
            config,
        }
    }
}

pub fn serialize_future<T, E, F, Fut>(
    f: F,
) -> Box<Future<Item = Body, Error = failure::Error> + Send>
where
    Fut: Future<Item = T, Error = E> + Send + 'static,
    F: IntoFuture<Item = T, Error = E, Future = Fut> + 'static,
    E: 'static,
    failure::Error: From<E>,
    T: Serialize + Send,
{
    Box::new(
        f.into_future()
            .map_err(failure::Error::from)
            .and_then(|resp| serde_json::to_string(&resp).map_err(|e| e.into()))
            .map(|resp| resp.into()),
    )
}

impl<
        T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static,
        M: ManageConnection<Connection = T>,
    > Controller for ControllerImpl<T, M>
{
    /// Handle a request and get future response
    fn call(&self, req: Request<Body>) -> ControllerFuture {
        let capitalizatoin_service = CapitalizationServiceImpl::new(
            self.db_pool.clone(),
            self.cpu_pool.clone(),
            self.config.http.dns_threads,
        );
        let uri = req.uri();

        let path = uri.path();

        match (&req.method().clone(), self.route_parser.test(&path)) {
            // GET /capitalization
            (&Method::GET, Some(Route::Capitalization)) => {
                if let (Some(from), Some(to)) = parse_query!(uri.query().unwrap_or_default(), "from" => DateTime<Utc>, "to" => DateTime<Utc>)
                {
                    debug!(
                        "Received request to get capitalization from {} to {}",
                        from, to
                    );
                    serialize_future(capitalizatoin_service.get(from.into(), to.into()))
                } else {
                    Box::new(future::err(
                        format_err!("Parsing query parameters // GET /capitalization failed!")
                            .context(ErrorKind::Parse)
                            .into(),
                    ))
                }
            }

            // Fallback
            (m, _) => Box::new(future::err(
                format_err!(
                    "Request to non existing endpoint in users microservice! {:?} {:?}",
                    m,
                    path
                ).context(ErrorKind::NotFound)
                .into(),
            )),
        }
    }
}
