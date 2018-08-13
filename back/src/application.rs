use std;

use failure;
use failure::Fail;
use failure::{Context, Error as FailureError};
use futures::future;
use futures::prelude::*;
use hyper;
use hyper::body::Payload;
use hyper::service::Service;
use hyper::Body;
use hyper::{Error, StatusCode};
use hyper::{Request, Response};
use serde_json;
use serde_json::Value;

use controller::Controller;

pub type ServerFuture = Box<Future<Item = Response<Body>, Error = hyper::Error> + Send>;

/// Batteries-included Service for Hyper HTTP server. Feed it your Controller and it'll adapt it for Hyper.
pub struct Application<E: Fail + Codeable + PayloadCarrier> {
    pub controller: Box<Controller>,
    _error_type: std::marker::PhantomData<E>,
}

unsafe impl<E: Fail + Codeable + PayloadCarrier> Send for Application<E> {}

impl<E: Fail + Codeable + PayloadCarrier> Service for Application<E> {
    type Error = Error;
    type Future = ServerFuture;
    type ReqBody = Body;
    type ResBody = Body;

    fn call(&mut self, req: Request<Body>) -> ServerFuture {
        debug!("Received request: {:?}", req);
        Box::new(
            self.controller
                .call(req)
                .then({
                    |res| match res {
                        Ok(data) => future::ok(Self::response_with_json(data)),
                        Err(err) => future::ok(Self::response_with_error(&err)),
                    }
                }).inspect(|resp| debug!("Sending response: {:?}", resp)),
        )
    }
}

impl<E: Fail + Codeable + PayloadCarrier> Application<E> {
    pub fn new<T>(controller: T) -> Self
    where
        T: Controller + 'static + Send,
    {
        Self {
            controller: Box::new(controller),
            _error_type: Default::default(),
        }
    }

    /// Responds with success, logs response body
    fn response_with_json(body: Body) -> Response<Body> {
        debug!("Http response body: {:?}", body);
        let mut response = Self::response_with_body(body);
        *response.status_mut() = StatusCode::OK;
        response
    }

    /// Responds with JSON error, logs response body
    fn response_with_error(error: &failure::Error) -> Response<Body> {
        trace!("Trace: {}", error.backtrace());
        let error_data = ErrorMessageWrapper::<E>::from(&error).inner;
        error!(
            "Description: \"{}\". Payload: {:?}",
            error_data.description, error_data.payload
        );
        let mes = serde_json::to_string(&error_data).unwrap();
        let mut response = Self::response_with_body(mes.into());
        *response.status_mut() = StatusCode::from_u16(error_data.code).unwrap();
        response
    }

    fn response_with_body(body: Body) -> Response<Body> {
        let len = body.content_length().unwrap_or_default().to_string();
        let mut response = Response::new(body);
        response.headers_mut().insert(
            hyper::header::CONTENT_LENGTH,
            hyper::header::HeaderValue::from_str(&len).unwrap(),
        );
        response.headers_mut().insert(
            hyper::header::CONTENT_TYPE,
            hyper::header::HeaderValue::from_static("application/json"),
        );
        response
    }
}

pub trait Codeable {
    fn code(&self) -> StatusCode;
}

pub trait PayloadCarrier {
    fn payload(&self) -> Option<Value>;
}

pub struct ErrorMessageWrapper<E: Fail + Codeable> {
    pub inner: ErrorMessage,
    _type: std::marker::PhantomData<E>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ErrorMessage {
    pub code: u16,
    pub description: String,
    pub payload: Option<Value>,
}

impl<E> ErrorMessageWrapper<E>
where
    E: Fail + Codeable + PayloadCarrier,
{
    pub fn from(e: &FailureError) -> Self {
        let description = e.iter_causes().fold(String::new(), |mut acc, real_err| {
            if !acc.is_empty() {
                acc += " | ";
            }
            acc += &real_err.to_string();
            acc
        });

        let mut code = 500;
        let mut payload = None;

        for cause in e.iter_causes() {
            let real_err = if let Some(ctx) = cause.downcast_ref::<Context<E>>() {
                Some(ctx.get_context())
            } else {
                cause.downcast_ref::<E>()
            };

            if let Some(e) = real_err {
                code = e.code().as_u16();
                payload = e.payload();
                break;
            }
        }

        Self {
            inner: ErrorMessage {
                code,
                description,
                payload,
            },
            _type: Default::default(),
        }
    }
}
