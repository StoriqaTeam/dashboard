// @flow

import React, { Component } from "react";
import Chart from "chart.js";
import { prop, reduce, over, lensProp, append, pipe } from "ramda";

import { apiClient, formatNumValue } from "utils";

import "./TokenholdersChart.scss";

type StateType = {
  //
};

type PropsType = {};

class TokenholdersChart extends Component<PropsType, StateType> {
  unmounted = true;
  alreadyAnimated = false;

  componentDidMount() {
    this.unmounted = false;
    this.fetchChartData();
  }

  fetchChartData = () => {
    if (this.unmounted) {
      return;
    }

    const mock = {
      totalValue: 48.938,
      delta: 238,
      data: [
        {
          from: 0,
          to: 500,
          value: 43,
          delta: 2.4
        },
        {
          from: 500000,
          to: 1000000,
          value: 23,
          delta: -1.4
        },
        {
          from: 1000000,
          to: null,
          value: 43,
          delta: 2.4
        }
      ]
    };

    this.initChart(this.transformResponseForChart(mock));
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

    const { from, to } = item;
    if (from != null && to != null) {
      return `${formatNumber(from)}-${formatNumber(to || 0)}`;
    } else if (!to) {
      return `>${formatNumber(from)}`;
    } else {
      return "";
    }
  };

  transformResponseForChart = (responseData: {}): {
    labels: Array<string>,
    data: Array<number>
  } => {
    return reduce(
      (acc, item) =>
        pipe(
          over(lensProp("labels"), append(this.getLabelForItem(item))),
          over(lensProp("data"), append(item.value))
        )(acc),
      {
        labels: [],
        data: []
      },
      prop("data", responseData)
    );
  };

  initChart = (data: { labels: Array<string>, data: Array<number> }) => {
    const ctx = document.getElementById("tokenholdersChart");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.data,
            backgroundColor: [
              "#d8d8d8",
              "#a4b6cc",
              "#7396ca",
              "#5172a3",
              "#4738ec",
              "#7817e5",
              "#00ffb8",
              "#e0ff00",
              "#e17745"
            ],
            borderColor: [
              "#d8d8d8",
              "#a4b6cc",
              "#7396ca",
              "#5172a3",
              "#4738ec",
              "#7817e5",
              "#00ffb8",
              "#e0ff00",
              "#e17745"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                color: "rgba(109, 179, 228, 0.3)"
              },
              ticks: {
                beginAtZero: true,
                fontColor: "#6b737e",
                fontFamily: "IBMPlexSansCond",
                fontSize: 16,
                callback: (value, index, values) => `${value}%`
              }
            }
          ],
          xAxes: [
            {
              gridLines: { display: false },
              ticks: {
                fontColor: "#6b737e",
                fontFamily: "IBMPlexSansCond",
                fontSize: 16
              }
            }
          ]
        }
      }
    });
  };

  render() {
    return (
      <div className="TokenholdersChart widget">
        <div className="titleWrapper">
          <h2>Tokenholders</h2>
          {/* formatNumValue(null, { value: 48.983, delta: 238 }) */}
        </div>
        <div className="tokenholdersChartWrapper">
          <canvas id="tokenholdersChart" />
        </div>
      </div>
    );
  }
}

export default TokenholdersChart;
