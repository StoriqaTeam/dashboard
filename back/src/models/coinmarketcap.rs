//! Models for managing capitalization
use std::time::SystemTime;

use chrono::{TimeZone, Utc};

use schema::coin_market_cap_values;

#[derive(Debug, Serialize, Deserialize, Clone, Queryable)]
pub struct CoinMarketCapValue {
    pub id: i32,
    pub time: SystemTime,
    pub capitalization: i64,
    pub price_btc: f64,
    pub price_usd: f64,
    pub price_eth: f64,
    pub volume_usd: i64,
}

impl Default for CoinMarketCapValue {
    fn default() -> CoinMarketCapValue {
        CoinMarketCapValue {
            time: SystemTime::UNIX_EPOCH,
            id: i32::default(),
            capitalization: i64::default(),
            price_btc: f64::default(),
            price_usd: f64::default(),
            price_eth: f64::default(),
            volume_usd: i64::default(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize, Clone, Insertable)]
#[table_name = "coin_market_cap_values"]
pub struct NewCoinMarketCapValue {
    pub time: SystemTime,
    pub capitalization: i64,
    pub price_btc: f64,
    pub price_usd: f64,
    pub price_eth: f64,
    pub volume_usd: i64,
}

#[derive(Debug, Serialize, Deserialize, Clone, Default)]
pub struct CoinMarketCap {
    pub market_cap_by_available_supply: Vec<Capintalization>,
    pub price_btc: Vec<Price>,
    pub price_platform: Vec<Price>,
    pub price_usd: Vec<Price>,
    pub volume_usd: Vec<Volume>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Capintalization {
    #[serde(rename = "0")]
    pub time: i64,
    #[serde(rename = "1")]
    pub value: i64,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Price {
    #[serde(rename = "0")]
    pub time: i64,
    #[serde(rename = "1")]
    pub value: f64,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Volume {
    #[serde(rename = "0")]
    pub time: i64,
    #[serde(rename = "1")]
    pub value: i64,
}

impl CoinMarketCap {
    pub fn to_vec(self) -> Vec<NewCoinMarketCapValue> {
        let mut res = vec![];
        for (i, cap) in self.market_cap_by_available_supply.into_iter().enumerate() {
            let time = Utc.timestamp(cap.time / 1000, 0).into();
            let capitalization = cap.value;
            let price_btc = self.price_btc[i].value;
            let price_usd = self.price_usd[i].value;
            let price_eth = self.price_platform[i].value;
            let volume_usd = self.volume_usd[i].value;
            res.push(NewCoinMarketCapValue {
                time,
                capitalization,
                price_btc,
                price_usd,
                price_eth,
                volume_usd,
            });
        }
        res
    }
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct CoinMarketCapValueExt {
    pub price: CurrenciesExt,
    pub volume: CurrenciesExt,
    pub marketcap: CurrenciesExt,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct ValueExt {
    value: f64,
    delta: Option<f64>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct CurrenciesExt {
    usd: ValueExt,
    eth: ValueExt,
    btc: ValueExt,
}

impl CoinMarketCapValueExt {
    pub fn new(current: CoinMarketCapValue, before: CoinMarketCapValue) -> Self {
        Self {
            price: CurrenciesExt {
                usd: ValueExt {
                    value: current.price_usd,
                    delta: Some((current.price_usd - before.price_usd) / before.price_usd),
                },
                eth: ValueExt {
                    value: current.price_eth,
                    delta: Some((current.price_eth - before.price_eth) / before.price_eth),
                },
                btc: ValueExt {
                    value: current.price_btc,
                    delta: Some((current.price_btc - before.price_btc) / before.price_btc),
                },
            },
            volume: CurrenciesExt {
                usd: ValueExt {
                    value: current.volume_usd as f64,
                    delta: Some(
                        (current.volume_usd - before.volume_usd) as f64 / before.volume_usd as f64,
                    ),
                },
                eth: ValueExt {
                    value: current.volume_usd as f64 * current.price_eth / current.price_usd,
                    delta: None,
                },
                btc: ValueExt {
                    value: current.volume_usd as f64 * current.price_btc / current.price_usd,
                    delta: None,
                },
            },
            marketcap: CurrenciesExt {
                usd: ValueExt {
                    value: current.capitalization as f64,
                    delta: Some(
                        (current.capitalization - before.capitalization) as f64
                            / before.capitalization as f64,
                    ),
                },
                eth: ValueExt {
                    value: current.capitalization as f64 * current.price_eth / current.price_usd,
                    delta: None,
                },
                btc: ValueExt {
                    value: current.capitalization as f64 * current.price_btc / current.price_usd,
                    delta: None,
                },
            },
        }
    }
}
