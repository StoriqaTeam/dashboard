// @flow

import React, { PureComponent } from "react";
import type { Node } from "react";

import CountDown from "../../vendor/CountDown";
import { formatNumValue, formatNumValueWithCurrency } from "../utils";

import type { NumValueType, CurrencyType } from "../../types";

import "./StoreStats.scss";

type PropsType = {
  store: {
    stores: NumValueType,
    items: NumValueType,
    tradeVolume: {
      [CurrencyType]: NumValueType
    }
  },
  wallet: {
    installs: NumValueType,
    transactions: NumValueType,
    launchTime: string
  }
};

import mock from "./mock";

class StoreStats extends PureComponent<PropsType> {
  render() {
    const {
      store: { stores, items, tradeVolume },
      wallet: { installs, transactions, launchTime }
    } = mock;
    return (
      <div className="StoreStats widget">
        <h2>Store stats</h2>
        {formatNumValue("Stores", stores)}
        {formatNumValue("Items", items)}
        <div className="row">
          <div className="title">Trade vol.</div>
          {formatNumValueWithCurrency({
            currency: "usd",
            numValue: tradeVolume.usd
          })}
        </div>
        {formatNumValue("Transactions", transactions)}

        <h2>wallet stats</h2>
        {formatNumValue("Wallet installs", installs)}
        {formatNumValue("Transactions", transactions)}
        <div className="row">
          <div className="title">Store launch in</div>
        </div>
        <CountDown
          date={launchTime}
          className="CountDown"
          days={{
            plural: "days",
            singular: "day"
          }}
          hours="hours"
          mins="min-s"
          segs="sec-s"
        />
      </div>
    );
  }
}

export default StoreStats;
