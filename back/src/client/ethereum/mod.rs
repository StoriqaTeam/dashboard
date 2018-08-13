mod responses;

use super::error::{Error, ErrorKind};
use bigdecimal::{BigDecimal, Num};
use futures::Future;
use http::request_entity;
use hyper::Method;
use models::*;
use serde::Deserialize;
use std::collections::HashMap;
use std::sync::Arc;
use types::Client;

use self::responses::*;

pub struct EthereumClient {
    client: Arc<Client>,
    key: String,
    topic: String,
    contract_address: String,
}

impl EthereumClient {
    pub fn new(client: Arc<Client>, key: String, topic: String, contract_address: String) -> Self {
        EthereumClient {
            client,
            key,
            topic,
            contract_address,
        }
    }

    pub fn fetch_current_block_number(&self) -> impl Future<Item = i64, Error = Error> {
        self.fetch::<BlockNumberResponse>("eth_blockNumber", &HashMap::new())
            .and_then(|response| {
                let hexstr_number = response.result;
                i64::from_str_radix(&hexstr_number[2..], 16).map_err(|_| {
                    format_err!(
                        "Ethereum block number request: Error parsing block number {} hex string as i64",
                        hexstr_number
                    ).context(ErrorKind::Deserizalization)
                    .into()
                })
            })
    }

    pub fn fetch_transactions(
        &self,
        from_block: Option<u64>,
        to_block: Option<u64>,
    ) -> impl Future<Item = Vec<NewTransaction>, Error = Error> {
        let mut params = HashMap::new();
        params.insert("address".to_string(), self.contract_address.clone());
        params.insert("topics".to_string(), format!("[{}]", self.topic));
        if let Some(from) = from_block {
            params.insert("fromBlock".to_string(), from.to_string());
        }
        if let Some(to) = to_block {
            params.insert("toBlock".to_string(), to.to_string());
        }
        self.fetch::<LogsResponse>("eth_getLogs", &params)
            .and_then(|response| {
                let res: Result<Vec<NewTransaction>, Error> =
                    response.result.iter().map(|log| {
                        let from_res: Result<String, Error> = log.topics.get(1).cloned().ok_or(
                            format_err!("Ethereum fetch transactions: Error getting topic at index 1 (`from_address`). Log receipt: {:?}", &log)
                            .context(ErrorKind::Deserizalization)
                            .into()
                        );
                        let to_res: Result<String, Error> = log.topics.get(2).cloned().ok_or(
                            format_err!("Ethereum fetch transactions: Error getting topic at index 2 (`to_address`). Log receipt: {:?}", &log)
                            .context(ErrorKind::Deserizalization)
                            .into()
                        );
                        let block_res: Result<i64, Error> = i64::from_str_radix(&log.block_number[2..], 16).map_err(|_| {
                            format_err!(
                                "Ethereum fetch transactions: Error parsing block number `{}` hex string as i64. Log receipt: {:?}",
                                log.block_number,
                                &log
                            ).context(ErrorKind::Deserizalization)
                            .into()
                        });
                        let value_res: Result<BigDecimal, Error> = Num::from_str_radix(&log.data[2..], 16).map_err(|_| {
                            format_err!(
                                "Ethereum fetch transactions: Error parsing block number `{}` hex string as BigDecimal. Log receipt: {:?}",
                                log.data,
                                &log
                            ).context(ErrorKind::Deserizalization)
                            .into()
                        });
                        let from = from_res?;
                        let to = to_res?;
                        let block = block_res?;
                        let value = value_res?;
                        Ok(NewTransaction {
                            from_address: TokenAddress::new(from.to_string()),
                            to_address: TokenAddress::new(to.to_string()),
                            block,
                            value
                        })
                    }).collect();
                res
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
