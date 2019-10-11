import React, { Component } from "react";
import { log } from "util";

import bus from "./bus.js";

export default class Bro2 extends Component {
  state = {};
  componentDidMount() {
    bus.on("sendSomething", data => {
      console.log(data);
      this.setState(data);
    });
  }
  render() {
    return (
      <div>
        <div>Bro2..{this.state.name}</div>
      </div>
    );
  }
}
