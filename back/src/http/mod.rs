use errors::ErrorKind;
use failure::{Error, Fail};
use futures::future;
use futures::stream::Stream;
use futures::Future;
use hyper;
use hyper::{Body, Method, Request, Response};
use log::{max_level, LevelFilter};
use serde::Deserialize;
use serde_json;
use std::collections::HashMap;
use std::sync::Arc;
use types::Client;

pub fn request_entity<T>(
    client: Arc<Client>,
    method: &Method,
    path: &str,
    query: &HashMap<String, String>,
    auth_header: Option<&str>,
    body: Option<Vec<u8>>,
) -> impl Future<Item = T, Error = Error>
where
    T: for<'a> Deserialize<'a> + 'static,
{
    request_string(client, method, path, &query, auth_header, body).and_then(|string| {
        trace!("Response: {}", string);
        future::result(serde_json::from_str::<T>(&string).map_err(move |e| {
            let err: Error = e.context(ErrorKind::HttpBodyEntity).into();
            err.context(format_err!("Response body: {}", string)).into()
        }))
    })
}

pub fn request_string(
    client: Arc<Client>,
    method: &Method,
    path: &str,
    query: &HashMap<String, String>,
    auth_header: Option<&str>,
    body: Option<Vec<u8>>,
) -> impl Future<Item = String, Error = Error> {
    request_bytes(client, method, path, &query, auth_header, body).and_then(|bytes| {
        future::result(
            String::from_utf8(bytes).map_err(|e| e.context(ErrorKind::HttpBodyUtf8).into()),
        )
    })
}

pub fn request_bytes(
    client: Arc<Client>,
    method: &Method,
    path: &str,
    query: &HashMap<String, String>,
    auth_header: Option<&str>,
    body: Option<Vec<u8>>,
) -> impl Future<Item = Vec<u8>, Error = Error> {
    request(client, method, path, query, auth_header, body).and_then(|resp| {
        resp.into_body()
            .fold(Vec::new(), |mut acc, chunk| {
                acc.extend_from_slice(&*chunk);
                future::ok::<_, hyper::Error>(acc)
            })
            .map_err(|e| e.context(ErrorKind::HttpBody).into())
    })
}

pub fn request(
    client: Arc<Client>,
    method: &Method,
    path: &str,
    query: &HashMap<String, String>,
    auth_header: Option<&str>,
    body: Option<Vec<u8>>,
) -> impl Future<Item = Response<Body>, Error = Error> {
    future::result(build_request(method, path, &query, auth_header, body)).and_then(move |req| {
        client
            .request(req)
            .map_err(|e| e.context(ErrorKind::Http).into())
    })
}

fn build_request(
    method: &Method,
    path: &str,
    query: &HashMap<String, String>,
    auth_header: Option<&str>,
    body: Option<Vec<u8>>,
) -> Result<Request<Body>, Error> {
    let url_encoded_query = url_encode_params(query);
    let url = if query.is_empty() {
        path.to_string()
    } else {
        format!("{}?{}", path, url_encoded_query)
    };
    trace!("HTTP 1.1 {} {}", method, url);
    let mut builder = Request::builder();
    builder.method(method.clone());
    builder.uri(url);
    if let Some(auth) = auth_header {
        builder.header("Authorization", auth);
    };
    let request_result = if let Some(body) = body {
        match max_level() {
            LevelFilter::Trace => match String::from_utf8(body.clone()) {
                Ok(string) => trace!("Body: {}", &string),
                Err(e) => trace!("Body: Cannot parse body as utf8 string: {:?}", e),
            },
            _ => (),
        };
        builder.body(body.into())
    } else {
        builder.body(Body::empty())
    };
    request_result.map_err(|e| e.context(ErrorKind::BuildRequest).into())
}

fn url_encode_params(params: &HashMap<String, String>) -> String {
    if params.len() == 0 {
        return String::new();
    }
    let mut result = String::new();
    for (key, value) in params {
        if result.len() != 0 {
            result.push_str(&format!("&{}={}", &key, &value))
        } else {
            result.push_str(&format!("{}={}", &key, &value))
        }
    }
    result
}
