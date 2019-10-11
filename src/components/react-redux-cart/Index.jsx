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

import { connect } from 'react-redux'

import { Progress } from 'antd';

class Index extends Component {
  constructor(props) {
    super()
    let totalCount = 0
    props.goodsList.forEach(item=>{
      totalCount += item.num
    })
    this.state={
      count:totalCount,
      percent:0
    }
    // setTimeout(()=>{this.state.percent+= 20},2000)
  }
 
  componentDidMount() {
    // 监听页面关闭事件
    window.onbeforeunload = () => {
      localStorage.setItem("SHOPCART",JSON.stringify(this.props.goodsList));
    };
  }
  componentWillUnmount() {
    window.removeEventListener('onbeforeunload',()=>{})
  }
  componentWillReceiveProps(newProps) {
    let total = 0;
    newProps.goodsList.forEach(item=>{
      total += item.num
    })
    this.setState({
      count:total
    })
  }
  render() {
    return (
      <Router>
        <div>
        <Progress percent={this.state.percent}/>
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
    )
  }
}


const mapStateToProps = (state ) => {
  console.log('.........',state)
  return {
    goodsList: state
  }
}



export default connect(
  mapStateToProps,
  null
)(Index)