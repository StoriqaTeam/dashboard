//! Models for managing capitalization
use std::collections::HashMap;
use std::time::SystemTime;

use chrono::{TimeZone, Utc};

use schema::coin_market_cap_values;

#[derive(Debug, Serialize, Deserialize, Clone, Queryable)]
pub struct CoinMarketCapValue {
    pub id: i32,
    pub time: SystemTime,
    pub capitalization: Option<i64>,
    pub price_btc: Option<f64>,
    pub price_usd: Option<f64>,
    pub price_eth: Option<f64>,
    pub volume_usd: Option<i64>,
}

impl Default for CoinMarketCapValue {
    fn default() -> CoinMarketCapValue {
        CoinMarketCapValue {
            time: SystemTime::UNIX_EPOCH,
            id: i32::default(),
            capitalization: None,
            price_btc: None,
            price_usd: None,
            price_eth: None,
            volume_usd: None,
        }
    }
}

#[derive(Debug, Serialize, Deserialize, Clone, Insertable)]
#[table_name = "coin_market_cap_values"]
pub struct NewCoinMarketCapValue {
    pub time: SystemTime,
    pub capitalization: Option<i64>,
    pub price_btc: Option<f64>,
    pub price_usd: Option<f64>,
    pub price_eth: Option<f64>,
    pub volume_usd: Option<i64>,
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
        let mut hashmap = HashMap::<
            SystemTime,
            (
                Option<i64>,
                Option<f64>,
                Option<f64>,
                Option<f64>,
                Option<i64>,
            ),
        >::new();
        for cap in self.market_cap_by_available_supply {
            hashmap
                .entry(Utc.timestamp(cap.time / 1000, 0).into())
                .or_insert((Some(cap.value), None, None, None, None));
        }
        for price_btc in self.price_btc {
            let (_, btc, _, _, _) = hashmap
                .entry(Utc.timestamp(price_btc.time / 1000, 0).into())
                .or_insert((None, Some(price_btc.value), None, None, None));
            *btc = Some(price_btc.value);
        }
        for price_usd in self.price_usd {
            let (_, _, usd, _, _) = hashmap
                .entry(Utc.timestamp(price_usd.time / 1000, 0).into())
                .or_insert((None, None, Some(price_usd.value), None, None));
            *usd = Some(price_usd.value);
        }
        for price_platform in self.price_platform {
            let (_, _, _, eth, _) = hashmap
                .entry(Utc.timestamp(price_platform.time / 1000, 0).into())
                .or_insert((None, None, None, Some(price_platform.value), None));
            *eth = Some(price_platform.value);
        }
        for volume_usd in self.volume_usd {
            let (_, _, _, _, vol) = hashmap
                .entry(Utc.timestamp(volume_usd.time / 1000, 0).into())
                .or_insert((None, None, None, None, Some(volume_usd.value)));
            *vol = Some(volume_usd.value);
        }

        hashmap
            .into_iter()
            .map(
                |(time, (capitalization, price_btc, price_usd, price_eth, volume_usd))| {
                    NewCoinMarketCapValue {
                        time,
                        capitalization,
                        price_btc,
                        price_usd,
                        price_eth,
                        volume_usd,
                    }
                },
            ).collect()
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
    value: Option<f64>,
    delta: Option<f64>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct CurrenciesExt {
    usd: ValueExt,
    eth: ValueExt,
    btc: ValueExt,
}

impl CoinMarketCapValueExt {
    pub fn new(current: CoinMarketCapValue, before: Option<CoinMarketCapValue>) -> Self {
        let before = before.unwrap_or_default();
        Self {
            price: CurrenciesExt {
                usd: ValueExt {
                    value: current.price_usd,
                    delta: current.price_usd.map(|price_usd| {
                        (price_usd / before.price_usd.unwrap_or(price_usd) - 1f64) * 100f64
                    }),
                },
                eth: ValueExt {
                    value: current.price_eth,
                    delta: current.price_eth.map(|price_eth| {
                        (price_eth / before.price_eth.unwrap_or(price_eth) - 1f64) * 100f64
                    }),
                },
                btc: ValueExt {
                    value: current.price_btc,
                    delta: current.price_btc.map(|price_btc| {
                        (price_btc / before.price_btc.unwrap_or(price_btc) - 1f64) * 100f64
                    }),
                },
            },
            volume: CurrenciesExt {
                usd: ValueExt {
                    value: current.volume_usd.map(|v| v as f64),
                    delta: current.volume_usd.map(|volume_usd| {
                        (volume_usd as f64 / before.volume_usd.unwrap_or(volume_usd) as f64 - 1f64)
                            * 100f64
                    }),
                },
                eth: ValueExt {
                    value: current.price_usd.map(|price_usd| {
                        current.volume_usd.unwrap_or_default() as f64
                            * current.price_eth.unwrap_or_default()
                            / price_usd
                    }),
                    delta: None,
                },
                btc: ValueExt {
                    value: current.price_usd.map(|price_usd| {
                        current.volume_usd.unwrap_or_default() as f64
                            * current.price_btc.unwrap_or_default()
                            / price_usd
                    }),
                    delta: None,
                },
            },
            marketcap: CurrenciesExt {
                usd: ValueExt {
                    value: current.capitalization.map(|v| v as f64),
                    delta: current.capitalization.map(|capitalization| {
                        (capitalization as f64
                            / before.capitalization.unwrap_or(capitalization) as f64
                            - 1f64)
                            * 100f64
                    }),
                },
                eth: ValueExt {
                    value: current.price_usd.map(|price_usd| {
                        current.capitalization.unwrap_or_default() as f64
                            * current.price_eth.unwrap_or_default()
                            / price_usd
                    }),
                    delta: None,
                },
                btc: ValueExt {
                    value: current.price_usd.map(|price_usd| {
                        current.capitalization.unwrap_or_default() as f64
                            * current.price_btc.unwrap_or_default()
                            / price_usd
                    }),
                    delta: None,
                },
            },
        }
    }
}
