import React, { Component } from "react";
import Chart from "chart.js";
import {
  map,
  path,
  head,
  last,
  prop,
  propOr,
  reduce,
  over,
  lensPath,
  pipe,
  append,
  assocPath,
  min,
  max
} from "ramda";
import moment from "moment";

import mock from "./mock";

import "./MarketCapChart.scss";

type PropsType = {
  //
};

type StateType = {
  //
};

type ChartDataInputType = {
  type: string,
  data: {
    labels: Array<Date>,
    datasets: Array<{
      data: Array<any>
    }>
  }
};

const safeExtract = (path: string, source: {}) => {
  const value = propOr(null, path, source);
  return value ? value.toFixed(8) : value;
};

class Marketcap extends Component<PropsType, StateType> {
  componentDidMount() {
    const data = this.prepareData(mock);
    this.initChart(data);
  }

  prepareData(
    data: Array<{}>
  ): {
    labels: Array<string>,
    capitalization: {
      data: Array<number>,
      min: number,
      max: number
    },
    usd: {
      data: Array<number>,
      min: number,
      max: number
    },
    btc: {
      data: Array<number>,
      min: number,
      max: number
    },
    eth: {
      data: Array<number>,
      min: number,
      max: number
    },
    volume: Array<?number>
  } {
    const result = reduce(
      (acc, item) => {
        return pipe(
          over(
            lensPath(["labels"]),
            append(
              new Date(
                parseInt(path(["time", "secs_since_epoch"], item), 10) * 1000
              )
            )
          ),
          over(
            lensPath(["cap", "data"]),
            append(safeExtract("capitalization", item))
          ),
          over(
            lensPath(["btc", "data"]),
            append(safeExtract("price_btc", item))
          ),
          over(
            lensPath(["usd", "data"]),
            append(safeExtract("price_usd", item))
          ),
          over(
            lensPath(["eth", "data"]),
            append(safeExtract("price_eth", item))
          ),
          assocPath(
            ["cap", "min"],
            min(prop("capitalization", item), path(["cap", "min"], acc))
          ),
          assocPath(
            ["cap", "max"],
            max(prop("capitalization", item), path(["cap", "max"], acc))
          ),
          assocPath(
            ["btc", "min"],
            min(prop("price_btc", item), path(["btc", "min"], acc))
          ),
          assocPath(
            ["btc", "max"],
            max(prop("price_btc", item), path(["btc", "max"], acc))
          ),
          assocPath(
            ["usd", "min"],
            min(prop("price_usd", item), path(["usd", "min"], acc))
          ),
          assocPath(
            ["usd", "max"],
            max(prop("price_usd", item), path(["usd", "max"], acc))
          ),
          assocPath(
            ["eth", "min"],
            min(prop("price_eth", item), path(["eth", "min"], acc))
          ),
          assocPath(
            ["eth", "max"],
            max(prop("price_eth", item), path(["eth", "max"], acc))
          ),
          over(lensPath(["volume"]), append(propOr(null, "volume_usd", item)))
        )(acc);
      },
      {
        labels: [],
        cap: {
          data: [],
          min: 999999999,
          max: 0
        },
        usd: {
          data: [],
          min: 999999999,
          max: 0
        },
        btc: {
          data: [],
          min: 999999999,
          max: 0
        },
        eth: {
          data: [],
          min: 999999999,
          max: 0
        },
        volume: []
      },
      data
    );
    console.log({ result });

    return result;
  }

  initChart(data: {}) {
    console.log({ data });
    const ctx = document.getElementById("chart");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.labels,
        datasets: [
          {
            yAxisID: "cap-y-axis",
            data: data.cap.data,
            borderColor: "rgba(109, 179, 228, 0.7)",
            borderWidth: 1,
            backgroundColor: "transparent"
          },
          {
            yAxisID: "btc-y-axis",
            data: data.btc.data,
            borderColor: "rgba(255, 157, 31, 0.7)",
            borderWidth: 1,
            backgroundColor: "transparent"
          },
          {
            yAxisID: "usd-y-axis",
            data: data.usd.data,
            borderColor: "rgba(255, 255, 255, 0.7)",
            borderWidth: 1,
            backgroundColor: "transparent"
          },
          {
            yAxisID: "eth-y-axis",
            data: data.eth.data,
            borderColor: "rgba(0, 255, 255, 0.7)",
            borderWidth: 1,
            spanGaps: false,
            backgroundColor: "transparent"
          }
        ]
      },
      options: {
        elements: {
          point: {
            radius: 0
          }
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              id: "cap-y-axis",
              type: "linear",
              position: "left",
              gridLines: {
                color: "rgba(109, 179, 228, 0.3)"
              },
              ticks: {
                fontColor: "#6db3e4",
                beginAtZero: true,
                callback: (value, index, values) => `$${value / 1000000}M`
              }
            },
            {
              id: "btc-y-axis",
              display: false,
              type: "linear",
              position: "right",
              ticks: {
                min: data.btc.min,
                max: data.btc.max,
                callback: (value, index, values) => value && value.toFixed(8)
              }
            },
            {
              id: "usd-y-axis",
              display: false,
              type: "linear",
              position: "right",
              ticks: {
                min: data.usd.min,
                max: data.usd.max,
                callback: (value, index, values) => value && value.toFixed(8)
              }
            },
            {
              id: "eth-y-axis",
              display: false,
              type: "linear",
              position: "right",
              ticks: {
                min: data.eth.min,
                max: data.eth.max,
                callback: (value, index, values) => value && value.toFixed(8)
              }
            }
          ],
          xAxes: [
            {
              gridLines: { display: false },
              ticks: {
                display: false
              }
            }
          ]
        }
      }
    });

    const volCtx = document.getElementById("chartVolume");
    const chartVolume = new Chart(volCtx, {
      type: "line",
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.volume,
            borderColor: "gray",
            backgroundColor: "gray"
          }
        ]
      },
      options: {
        layout: {
          padding: {
            left: 0,
            right: 35,
            top: 0,
            bottom: 0
          }
        },
        elements: {
          point: {
            radius: 0
          }
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              type: "linear",
              position: "left",
              display: false,
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: { display: false },
              ticks: {
                autoSkipPadding: 25,
                maxRotation: 0,
                callback: (value, index, values) =>
                  moment(value).format("D MMM")
              }
            }
          ]
        }
      }
    });
  }

  render() {
    return (
      <div className="MarketCapChart widget">
        <div className="legend">
          <div className="legendRow">
            <div className="usdBullet" />
            <span>USD</span>
          </div>
          <div className="legendRow">
            <div className="ethBullet" />
            <span>ETH</span>
          </div>
          <div className="legendRow">
            <div className="btcBullet" />
            <span>BTC</span>
          </div>
        </div>
        <div>
          <canvas id="chart" height="100%" />
        </div>
        <div>
          <canvas id="chartVolume" height="100%" />
        </div>
      </div>
    );
  }
}

export default Marketcap;
