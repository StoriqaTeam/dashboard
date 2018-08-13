mod responses;

use errors::{Error, ErrorKind};
use futures::Future;
use http::request_entity;
use hyper::Method;
use serde::Deserialize;
use std::collections::HashMap;
use std::sync::Arc;
use types::Client;

use self::responses::*;

pub struct EthereumClient {
    client: Arc<Client>,
    key: String,
    topic: String,
}

impl EthereumClient {
    pub fn new(client: Arc<Client>, key: String, topic: String) -> Self {
        EthereumClient { client, key, topic }
    }

    pub fn fetch_current_block_number(&self) -> impl Future<Item = u64, Error = Error> {
        self.fetch::<BlockNumberResponse>("eth_blockNumber", &HashMap::new())
            .and_then(|response| {
                let hexstr_number = response.result;
                u64::from_str_radix(&hexstr_number[2..], 16).map_err(|_| {
                    format_err!(
                        "Block number request: Error parsing {} as hex string",
                        hexstr_number
                    ).context(ErrorKind::Deserizalization)
                    .into()
                })
            })
    }

    fn fetch<T>(
        &self,
        method: &str,
        args: &HashMap<String, String>,
    ) -> impl Future<Item = T, Error = Error>
    where
        T: for<'a> Deserialize<'a> + 'static,
    {
        let mut query = args.clone();
        query.insert("token".to_string(), self.key.clone());
        let url = format!("https://api.infura.io/v1/jsonrpc/mainnet/{}", method);
        request_entity(self.client.clone(), &Method::GET, &url, &query, None)
            .map_err(|e| e.context(ErrorKind::Http).into())
    }
}
