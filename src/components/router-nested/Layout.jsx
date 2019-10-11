import React, { Component } from "react";
import styles from './Layout.module.css'
import { Route, Link, Switch, Redirect } from "react-router-dom";
function Menu1() {
  return <div>
      <p>彩蛋11111</p>
  </div>
}
function Menu2() {
  return <div  style={{color:'purple',fontSize:20}}>
      <p>彩蛋22222</p>
  </div>
}
export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="left">
          <p>
            <Link to="/layout/menu1">彩蛋1</Link>
          </p>
          <p>
            <Link to="/layout/menu2">彩蛋2</Link>
          </p>
        </div>
          <hr/>
        <div className={styles.right}>
          <Switch>
            <Route path="/layout/menu1" component={Menu1}></Route>
            <Route path="/layout/menu2" component={Menu2}></Route>
            <Redirect exact from='/layout' to='/layout/menu1' />
          </Switch>
        </div>
      </div>
    );
  }
}
