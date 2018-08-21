// @flow

import React, { Component } from "react";
import Chart from "chart.js";
import {
  prop,
  reduce,
  over,
  lensProp,
  append,
  pipe,
  pathOr,
  addIndex,
  map,
  forEach,
  max
} from "ramda";
import className from "classnames";

import { apiClient, formatNumValue } from "utils";

import "./TokenholdersChart.scss";

import type { NumValueType } from "types";

type TokenholdersDataType = {
  holdersArray: Array<{
    from: number,
    to: number,
    value: number,
    delta: ?number
  }>,
  holdersInfo: NumValueType
};

type StateType = {
  tokenholdersData: TokenholdersDataType
};

type PropsType = {};

const indexedMap = addIndex(map);

const backgroundColors = [
  "#d8d8d8",
  "#a4b6cc",
  "#7396ca",
  "#5172a3",
  "#4738ec",
  "#7817e5",
  "#00ffb8",
  "#e0ff00",
  "#e17745"
];

class TokenholdersChart extends Component<PropsType, StateType> {
  unmounted = true;
  alreadyAnimated = false;

  state: StateType = {
    tokenholdersData: {
      holdersArray: [],
      holdersInfo: {
        value: 0,
        delta: 0
      }
    }
  };

  componentDidMount() {
    this.unmounted = false;
    this.fetchChartData();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  fetchChartData = () => {
    if (this.unmounted) {
      return;
    }

    apiClient
      .fetchTokenholders()
      .then(response => {
        this.setState(
          {
            tokenholdersData: {
              holdersArray: pathOr([], ["data", "buckets"], response),
              holdersInfo: {
                value: pathOr(0, ["data", "tokenholders"], response),
                delta: pathOr(null, ["data", "tokenholdersDelta"], response)
              }
            }
          },
          () => {
            setTimeout(() => {
              this.fetchChartData();
            }, 10000);
          }
        );
      })
      .catch(err => {
        console.log({ err });
        setTimeout(() => {
          this.fetchChartData();
        }, 10000);
      });
  };

  getLabelForItem = (item: { from: number, to: ?number }) => {
    const formatNumber = (value: number) => {
      if (value >= 1000000) {
        return `${parseInt(value / 1000000, 10)}M`;
      } else if (value >= 1000) {
        return `${parseInt(value / 1000, 10)}K`;
      } else {
        return `${value}`;
      }
    };

    const { from } = item;
    let { to } = item;
    if (to && to > 1000000000) {
      to = null;
    }

    if (from != null && to != null) {
      return `${formatNumber(from)}-${formatNumber(to || 0)}`;
    } else if (!to) {
      return `>${formatNumber(from)}`;
    } else {
      return "";
    }
  };

  renderGrid = () => {
    const result = [];
    for (let i = 0; i <= 10; i++) {
      result.push(
        <div
          key={`grid-item-key-${i}`}
          className={className("gridItem", {
            first: i === 0,
            notFirst: i > 0
          })}
        >
          {`${i * 3}K`}
        </div>
      );
    }
    return result;
  };

  drawDelta = (delta: number, value: number) => {
    const result = delta / (value - delta);

    return (
      <span
        className={className({
          positive: result >= 0,
          negative: result < 0
        })}
      >
        {delta >= 0 ? `+${result.toFixed(5)}` : `${result.toFixed(5)}`}%
      </span>
    );
  };

  render() {
    const total = this.state.tokenholdersData.holdersInfo.value;

    return (
      <div className="TokenholdersChart widget">
        <div className="titleWrapper">
          <h2>Tokenholders</h2>
          {formatNumValue(null, this.state.tokenholdersData.holdersInfo)}
        </div>
        <div className="tokenholdersChartWrapper">
          <div className="grid">{this.renderGrid()}</div>
          <div className="bars">
            {indexedMap((item, idx) => {
              return (
                <div key={`bar-item=${idx}`} className="barItem">
                  <div className="barItemDelta">
                    {this.drawDelta(item.delta, item.value)}
                  </div>
                  <div className="barItemValue">{item.value}</div>
                  <div
                    className="bar"
                    style={{
                      backgroundColor: backgroundColors[idx],
                      height: `${parseInt((item.value / 30000) * 100, 10)}%`
                    }}
                  />
                  <div className="fromTo">{this.getLabelForItem(item)}</div>
                </div>
              );
            }, this.state.tokenholdersData.holdersArray)}
          </div>
        </div>
      </div>
    );
  }
}

export default TokenholdersChart;
