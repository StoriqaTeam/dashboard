// @flow

import React, { PureComponent, Fragment } from "react";
import type { Node } from "react";
import { map, head, last, toPairs, prop } from "ramda";
import classname from "classnames";

import "./TokenInfo.scss";

import type { CurrencyType, NumValueType } from "../../types";

import mock from "./mock";
import { formatNumber, formatNumValueWithCurrency } from "../utils";

type PropsType = {
  price: {
    [CurrencyType]: NumValueType
  },
  volume: {
    [CurrencyType]: NumValueType
  },
  marketcap: {
    [CurrencyType]: NumValueType
  }
};

const TokenInfo = (props: PropsType) => {
  console.log({ mock });
  const { volume, marketcap } = mock;

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
      }, toPairs(mock.price))}
      <div className="row" style={{ marginTop: 20 }}>
        <div className="title">Volume (24h)</div>
        {formatNumValueWithCurrency({
          currency: "usd",
          numValue: volume.usd
        })}
      </div>
      <div className="subtitle">
        <span>{volume.btc.value} BTC</span>
        <span>{volume.eth.value} ETH</span>
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="title">Market Cap</div>
        {formatNumValueWithCurrency({
          currency: "usd",
          numValue: marketcap.usd
        })}
      </div>
      <div className="subtitle">
        <span>{formatNumber(marketcap.btc.value)} BTC</span>
        <span>{formatNumber(marketcap.eth.value)} ETH</span>
      </div>
    </div>
  );
};

export default TokenInfo;
