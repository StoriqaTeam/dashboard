// @flow

import React, { Component } from "react";
import type { Node } from "react";
import { map, head, last, toPairs, prop } from "ramda";
import classname from "classnames";

import { formatNumber, formatNumValueWithCurrency, apiClient } from "utils";

import type { CurrencyType, NumValueType } from "types";

import "./TokenInfo.scss";

type StateType = {
  data: {
    price: {
      [CurrencyType]: NumValueType
    },
    volume: {
      [CurrencyType]: NumValueType
    },
    marketcap: {
      [CurrencyType]: NumValueType
    }
  }
};

class TokenInfo extends Component<{}, StateType> {
  unmounted = true;

  state: StateType = {
    data: {
      price: {},
      volume: {},
      marketcap: {}
    }
  };

  componentDidMount() {
    this.unmounted = false;
    this.fetchData();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  fetchData = () => {
    apiClient.fetchTokenInfo().then(response => {
      if (this.unmounted) {
        return;
      }

      this.setState({ data: response.data }, () => {
        setTimeout(() => {
          this.fetchData();
        }, 10000);
      });
    });
  };

  render() {
    const { volume, marketcap } = this.state.data;

    return (
      <div className="TokenInfo widget">
        <h2>Storiqa (stq)</h2>
        {map(priceItem => {
          const currency = head(priceItem);
          const price = last(priceItem);
          return (
            <div className="row" key={currency}>
              <div className={classname("title uppercase", currency)}>
                {currency}
              </div>
              {formatNumValueWithCurrency({
                currency,
                numValue: price
              })}
            </div>
          );
        }, toPairs(this.state.data.price))}
        <div className="row" style={{ marginTop: 20 }}>
          <div className="title">Volume (24h)</div>
          {formatNumValueWithCurrency({
            currency: "usd",
            numValue: volume && volume.usd
          })}
        </div>
        <div className="subtitle">
          <span>
            {volume &&
              volume.btc &&
              volume.btc.value &&
              volume.btc.value.toFixed(2)}{" "}
            BTC
          </span>
          <span>
            {volume &&
              volume.eth &&
              volume.eth.value &&
              volume.eth.value.toFixed(2)}{" "}
            ETH
          </span>
        </div>
        <div className="row" style={{ marginTop: 10 }}>
          <div className="title">Market Cap</div>
          {formatNumValueWithCurrency({
            currency: "usd",
            numValue: marketcap.usd
          })}
        </div>
        <div className="subtitle">
          <span>
            {formatNumber(
              marketcap &&
                marketcap.btc &&
                marketcap.btc.value &&
                marketcap.btc.value.toFixed(2)
            )}{" "}
            BTC
          </span>
          <span>
            {formatNumber(
              marketcap &&
                marketcap.eth &&
                marketcap.eth.value &&
                marketcap.eth.value.toFixed(2)
            )}{" "}
            ETH
          </span>
        </div>
      </div>
    );
  }
}

export default TokenInfo;
