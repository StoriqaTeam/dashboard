use futures::future::Future;

use failure::Error as FailureError;

/// Service layer Future
pub type ServiceFuture<T> = Box<Future<Item = T, Error = FailureError> + Send>;
