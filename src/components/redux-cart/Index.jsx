import React, { Component } from "react";
import styles from "./Index.module.css";
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import Cart from "./Cart.jsx";
import GoodList from "./GoodList.jsx";
import store from "./store";
export default class Index extends Component {
  state = {
    count: 0
  }
  componentDidMount() {
    this.setState({
      count: this.getData()
    });
    store.subscribe(() => {
      this.setState({
        count: this.getData()
      });
    });
    // 监听页面关闭事件
    window.onbeforeunload = () => {
      localStorage.setItem("SHOPCART", JSON.stringify(store.getState()));
    };
  }
  getData() {
    let totalCount = 0;
    store.getState().forEach(item => {
      totalCount += item.num;
    });
    return totalCount;
  }
  render() {
    return (
      <Router>
        <div>
          <h3 className={styles.title}>
            樱井--商城
            <p>
              <Link to="/goodList">商品列表</Link>&nbsp;&nbsp;&nbsp;
              <Link to="/cart">
                购物车
                {this.state.count > 0 && <span>({this.state.count})</span>}
              </Link>
            </p>
          </h3>
          <div>
            <Switch>
              <Route path="/cart" component={Cart}></Route>
              <Route path="/goodList" component={GoodList}></Route>
              <Redirect exact from="/" to="/goodList" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
