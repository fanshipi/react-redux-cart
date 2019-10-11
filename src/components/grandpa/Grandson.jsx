import React, { Component } from "react";
import Context from "./context.js";

export default class Bro1 extends Component {
  render() {
    return (
      <div>
        <Context.Consumer>
            {
                data => {
                    return <div>
                    <span style={{color:data}}>Granson---{data}</span>
                    </div>
                }
            }
        </Context.Consumer>
      </div>
    );
  }
}
