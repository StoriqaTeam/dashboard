import React, { Component } from "react";

import "./MarketCapChart";

type PropsType = {
  //
};

type StateType = {
  //
};

class Marketcap extends Component<PropsType, StateType> {
  render() {
    return (
      <div className="MarketCapChart widget">
        <h2>Marketcap chart</h2>
      </div>
    );
  }
}

export default Marketcap;
