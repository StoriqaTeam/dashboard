import React, { Component } from "react";
import ReactDOM from "react-dom";

import { MarketcapChart } from "components/MarketcapChart";
import { TokenInfo } from "components/TokenInfo";
import { CommunityInfo } from "components/CommunityInfo";
import { StoreStats } from "components/StoreStats";
import { ExchangesStats } from "components/ExchangesStats";
import { TokenholdersChart } from "components/TokenholdersChart";

import "./index.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="row1">
          <MarketcapChart />
          <TokenInfo />
          <StoreStats />
          <CommunityInfo />
        </div>
        <div className="row2">
          <TokenholdersChart />
          <div className="widget" style={{ width: "41.65%" }} />
          <ExchangesStats />
        </div>
      </div>
    );
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
