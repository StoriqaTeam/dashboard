use std::fmt;
use std::fmt::Display;

use failure::{Backtrace, Context, Fail};

#[derive(Debug)]
pub struct Error {
    inner: Context<ErrorKind>,
}

#[derive(Copy, Clone, Eq, PartialEq, Debug, Fail)]
pub enum ErrorKind {
    #[fail(display = "Coinmarketcap fetcher: Coinmarketcap client error")]
    HttpClient,
    #[fail(display = "Coinmarketcap fetcher: Failed to obtain db connection")]
    DatabaseConnection,
    #[fail(display = "Coinmarketcap client: Coinmarketcap repo error")]
    CoinmarketcapRepo,
    #[fail(display = "Ethereum client: Error starting timer")]
    Timer,
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
