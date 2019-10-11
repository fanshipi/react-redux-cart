import React, { Component } from "react";
import {
  HashRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import FoodList from "./FoodList";
import NewsList from "./NewsList";
import Notfound from "./Notfound";
import NewsDetail from "./NewsDetail";

export default class Index extends Component {
  render() {
    return (
      <Router>
        <div>
          <span>
            <Link to="/foodlist"> 食品列表</Link>&nbsp;&nbsp;
          </span>

          <span>
            <Link to="/newslist"> 新闻列表</Link>
          </span>

          <hr />
          {/* 重定向写在switch里面 */}
          <Switch>
            {/* <Route exact path="/" component={FoodList} /> */}
            <Route path="/foodlist" component={FoodList}></Route>
            <Route path="/newslist" component={NewsList}></Route>
            {/* <Route path="/newsdetail/:newsId" component={NewsDetail}></Route> */}
            <Route path="/newsdetail/" component={NewsDetail}></Route>
            <Redirect exact from="/" to="/foodlist" />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
