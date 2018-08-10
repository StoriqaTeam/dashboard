// @flow

import React, { PureComponent, Fragment } from "react";
import type { Node } from "react";
import { map, head, last, toPairs, prop } from "ramda";
import classname from "classnames";

import "./TokenInfo.scss";

import type { CurrencyType, NumValueType } from "../../types";

import mock from "./mock";

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

const format = (value: number): string => (value || 0).toLocaleString("ru-RU");

type FormatNumValuePropsType = {
  currency: CurrencyType,
  numValue: NumValueType
};
const formatNumValue = (input: FormatNumValuePropsType) => {
  const { currency, numValue } = input;
  if (currency === "usd") {
    return (
      <div className="value">
        ${format(numValue.value)}
        {numValue.delta ? (
          <span
            className={classname("delta", {
              positive: numValue.delta && numValue.delta > 0,
              negative: numValue.delta && numValue.delta <= 0
            })}
          >
            &nbsp; ({numValue.delta > 0 && `+`}
            {format(numValue.delta)}
            {numValue.deltaChar || ""})
          </span>
        ) : (
          ""
        )}
      </div>
    );
  }

  return (
    <div className="value">
      {`${numValue.value} ${currency.toUpperCase()}`}
      {numValue.delta ? (
        <span
          className={classname("delta", {
            positive: numValue.delta && numValue.delta > 0,
            negative: numValue.delta && numValue.delta <= 0
          })}
        >
          &nbsp; ({numValue.delta > 0 && `+`}
          {format(numValue.delta)}
          {numValue.deltaChar || ""})
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

const TokenInfo = (props: PropsType) => {
  console.log({ mock });
  const { volume, marketcap } = mock;

  const renderSmth = () => (
    <div className="subtitle">
      <span>{volume.btc} BTC</span>
      <span>{volume.eth} ETH</span>
    </div>
  );

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
            {formatNumValue({
              currency,
              numValue: price
            })}
          </div>
        );
      }, toPairs(mock.price))}
      <div className="row" style={{ marginTop: 20 }}>
        <div className="title">Volume (24h)</div>
        {formatNumValue({
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
        {formatNumValue({
          currency: "usd",
          numValue: marketcap.usd
        })}
      </div>
      <div className="subtitle">
        <span>{format(marketcap.btc.value)} BTC</span>
        <span>{format(marketcap.eth.value)} ETH</span>
      </div>
    </div>
  );
};

export default TokenInfo;
