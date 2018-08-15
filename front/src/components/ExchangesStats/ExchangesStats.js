// @flow

import React, { PureComponent } from "react";
import { map } from "ramda";

import type { Node } from "react";

import { formatNumber } from "../utils";

import "./ExchangesStats.scss";

type ExchangeStatsType = {|
  exchangeName: string,
  buyVolume: {
    stq: number,
    usd: number
  },
  sellVolume: {
    stq: number,
    usd: number
  }
|};

type PropsType = {
  exchangesStats: Array<ExchangeStatsType>
};

const mock: PropsType = {
  exchangesStats: [
    {
      exchangeName: "HitBTC",
      buyVolume: {
        stq: 20940795,
        usd: 45090
      },
      sellVolume: {
        stq: 3987650,
        usd: 67563
      }
    },
    {
      exchangeName: "Tidex",
      buyVolume: {
        stq: 940795,
        usd: 145090
      },
      sellVolume: {
        stq: 987650,
        usd: 7563
      }
    },
    {
      exchangeName: "Coinbene",
      buyVolume: {
        stq: 20940795,
        usd: 45090
      },
      sellVolume: {
        stq: 3987650,
        usd: 67563
      }
    },
    {
      exchangeName: "Indodax",
      buyVolume: {
        stq: 20940795,
        usd: 45090
      },
      sellVolume: {
        stq: 3987650,
        usd: 67563
      }
    }
  ]
};

const roundValue = (value: number): string => {
  if (value > 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  } else if (value > 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  } else {
    return `${value}`;
  }
};

const renderExchangeStatsItem = (exchangeStats: ExchangeStatsType): Node => {
  const { exchangeName, buyVolume, sellVolume } = exchangeStats;
  return (
    <div key={`exchange-key-${exchangeName}`} className="item">
      <div className="title">{exchangeName}</div>
      <div className="volumes">
        <div className="buy">
          <div className="stq">{roundValue(buyVolume.stq)}</div>
          <div className="usd">${formatNumber(buyVolume.usd)}</div>
        </div>
        <div className="sell">
          <div className="stq">{roundValue(sellVolume.stq)}</div>
          <div className="usd">${formatNumber(sellVolume.usd)}</div>
        </div>
      </div>
    </div>
  );
};

class ExchangesStats extends PureComponent<PropsType> {
  render() {
    const { exchangesStats } = mock;
    return (
      <div className="ExchangesStats widget">
        {/* <div className="header">
          <div className="stub" />
          <div className="col1">STQ/$</div>
          <div className="col2">STQ/$</div>
        </div>
        {map(renderExchangeStatsItem, exchangesStats)} */}
      </div>
    );
  }
}

export default ExchangesStats;
