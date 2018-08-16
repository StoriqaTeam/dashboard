//! Repos is a module responsible for interacting with postgres db

pub mod coinmarketcap;
mod error;
pub mod transactions;
pub mod types;

pub use self::coinmarketcap::*;
pub use self::error::{Error as ReposError, ErrorKind as ReposErrorKind};
pub use self::transactions::*;
pub use self::types::*;

// Postgres has limit on number of params - 65 535, therefore we need a limit for batch inserts.
// This one assumes no more than 65 fields per entity.
static MAX_ENTITIES_FOR_INSERT: usize = 1000;
