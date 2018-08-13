import React, { Component } from "react";
import ReactDOM from "react-dom";

import { MarketcapChart } from "./components/MarketcapChart";
import { TokenInfo } from "./components/TokenInfo";
import { CommunityInfo } from "./components/CommunityInfo";
import { StoreStats } from "./components/StoreStats";
import { ExchangesStats } from "./components/ExchangesStats";

import "./index.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <MarketcapChart /> */}
        <TokenInfo />
        <StoreStats />
        <CommunityInfo />
        <ExchangesStats />
      </div>
    );
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
