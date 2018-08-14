use std::fmt;
use std::fmt::Display;

use failure::{Backtrace, Context, Fail};
use hyper::StatusCode;
use serde_json;

use application::*;

#[derive(Debug)]
pub struct Error {
    inner: Context<ErrorKind>,
}

#[derive(Copy, Clone, Eq, PartialEq, Debug, Fail)]
pub enum ErrorKind {
    #[fail(display = "Error building http request")]
    BuildRequest,
    #[fail(display = "Error fetching http request")]
    Http,
    #[fail(display = "Error reading http body")]
    HttpBody,
    #[fail(display = "Error parsing http bytes body into Utf8 format")]
    HttpBodyUtf8,
    #[fail(display = "Error parsing http string body into requested entity")]
    HttpBodyEntity,
    #[fail(display = "Client: Deserialization error")]
    Deserizalization,
    #[fail(display = "R2D2 connection error")]
    Connection,
    #[fail(display = "Not found")]
    NotFound,
    #[fail(display = "Parse error")]
    Parse,
    #[fail(display = "Server is refusing to fullfil the request")]
    Forbidden,
}

impl Fail for Error {
    fn cause(&self) -> Option<&Fail> {
        self.inner.cause()
    }

    fn backtrace(&self) -> Option<&Backtrace> {
        self.inner.backtrace()
    }
}

impl Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        Display::fmt(&self.inner, f)
    }
}

impl From<ErrorKind> for Error {
    fn from(kind: ErrorKind) -> Error {
        Error {
            inner: Context::new(kind),
        }
    }
}

impl From<Context<ErrorKind>> for Error {
    fn from(inner: Context<ErrorKind>) -> Error {
        Error { inner: inner }
    }
}

impl Codeable for Error {
    fn code(&self) -> StatusCode {
        match self.inner.get_context() {
            ErrorKind::NotFound => StatusCode::NOT_FOUND,
            ErrorKind::Parse | ErrorKind::Deserizalization => StatusCode::UNPROCESSABLE_ENTITY,
            ErrorKind::Connection
            | ErrorKind::BuildRequest
            | ErrorKind::Http
            | ErrorKind::HttpBody
            | ErrorKind::HttpBodyEntity
            | ErrorKind::HttpBodyUtf8 => StatusCode::INTERNAL_SERVER_ERROR,
            ErrorKind::Forbidden => StatusCode::UNAUTHORIZED,
        }
    }
}

impl PayloadCarrier for Error {
    fn payload(&self) -> Option<serde_json::Value> {
        match *self {
            _ => None,
        }
    }
}
