import React, { Component } from "react";
import ReactDOM from "react-dom";

import Marketcap from "./components/Marketcap";

class App extends Component {
  render() {
    return <Marketcap />;
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
