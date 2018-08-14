mod responses;

use bigdecimal::BigDecimal;
use errors::{Error, ErrorKind};
use failure::Fail;
use futures::Future;
use http::request_entity;
use hyper::Method;
use models::*;
use serde::Deserialize;
use serde_json::Value;
use std::collections::HashMap;
use std::str::FromStr;
use std::sync::Arc;
use types::Client;

use self::responses::*;

#[derive(Clone)]
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
        self.fetch::<BlockNumberResponse>("eth_blockNumber", None)
            .and_then(|response| {
                let hexstr_number = response.result;
                i64::from_str_radix(&hexstr_number[2..], 16).map_err(|_| {
                    format_err!(
                        "Ethereum block number request: Error parsing block number {} hex string as i64",
                        &hexstr_number[2..]
                    ).context(ErrorKind::Deserizalization)
                    .into()
                })
            })
    }

    pub fn fetch_transactions(
        &self,
        from_block: Option<i64>,
        to_block: Option<i64>,
    ) -> impl Future<Item = Vec<NewTransaction>, Error = Error> {
        let address = self.contract_address.clone();
        let topics = vec![self.topic.clone()];
        let mut params = json!({
            "address": address,
            "topics": topics,
        });
        {
            let hash_params = params.as_object_mut().unwrap();
            if let Some(from) = from_block {
                let hex = format!("0x{:x}", from);
                hash_params.insert("fromBlock".to_string(), json!(hex));
            }
            if let Some(to) = to_block {
                let hex = format!("0x{:x}", to);
                hash_params.insert("toBlock".to_string(), json!(hex));
            }
        }
        params = json!({
            "params": vec![params],
        });
        self.fetch::<LogsResponse>("eth_getLogs", Some(params))
            .and_then(|response| {
                let res: Result<Vec<NewTransaction>, Error> = response
                    .result
                    .iter()
                    .map(|log| {
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
                        let block_res: Result<i64, Error> = i64::from_str_radix(
                            &log.block_number[2..],
                            16,
                        ).map_err(
                            |e| {
                                e.context(
                                format_err!(
                                    "Ethereum fetch transactions: Error parsing block number `{}` hex string as i64. Log receipt: {:?}",
                                    &log.block_number[2..],
                                    &log
                                )
                            ).context(ErrorKind::Deserizalization)
                            .into()
                            },
                        );
                        // Bigdecimal cannot convert hex strings, only decimals
                        let value_res: Result<BigDecimal, Error> = u128::from_str_radix(
                            &log.data[2..],
                            16,
                        ).map_err(|e| {
                            e.context(
                                format_err!(
                                    "Ethereum fetch transactions: Error parsing transaction value `{}` hex string as BigDecimal. Log receipt: {:?}",
                                    &log.data[2..],
                                    &log
                                )
                            ).context(ErrorKind::Deserizalization)
                            .into()
                        })
                            .and_then(|number| {
                                // it's derirable to convert number to bigdecimal rightaway, but
                                // there's some strange bug using from "u128"
                                let decimal = format!("{}", number);
                                BigDecimal::from_str(&decimal).map_err(|e| {
                                    e.context(
                                    format_err!("Ethereum fetch transactions: Error converting string value {} to `BigDecimal`", number)
                                ).context(ErrorKind::Deserizalization).into()
                                })
                            });
                        let from = from_res?;
                        let to = to_res?;
                        let block = block_res?;
                        let value = value_res?;
                        Ok(NewTransaction {
                            from_address: TokenAddress::new(from.to_string()),
                            to_address: TokenAddress::new(to.to_string()),
                            block,
                            value,
                            block_hash: log.block_hash.clone(),
                            transaction_hash: log.transaction_hash.clone(),
                        })
                    })
                    .collect();
                res
            })
    }

    fn fetch<T>(&self, method: &str, args: Option<Value>) -> impl Future<Item = T, Error = Error>
    where
        T: for<'a> Deserialize<'a> + 'static,
    {
        let url = format!("https://mainnet.infura.io/v3/{}", &self.key);
        let args = args.map(|mut json| {
            let json_clone = json.clone();
            if let Some(obj) = json.as_object_mut() {
                obj.insert("method".to_string(), json!(method));
                obj.insert("id".to_string(), json!(1));
                obj.insert("jsonrpc".to_string(), json!("2.0"));
            } else {
                error!(
                    "Ethereum client: fetch: args must be an object, but got {}",
                    json_clone
                );
            };
            json.to_string().as_bytes().to_vec()
        });
        request_entity(
            self.client.clone(),
            &Method::POST,
            &url,
            &HashMap::new(),
            None,
            args,
        ).map_err(|e| e.context(ErrorKind::Http).into())
    }
}
