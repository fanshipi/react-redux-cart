import React, { Component } from "react";
import Login from "./Login";
import Layout from "./Layout";

import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
export default class Index extends Component {
  render() {
    return (
      <Router>
        <div>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/layout" component={Layout}></Route>
                <Redirect exact from='/' to="/login" />
            </Switch>
        </div>
      </Router>
    );
  }
}
