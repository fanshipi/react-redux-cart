import React, { Component } from "react";
import styles from "./goodlist.module.css";
import { Button } from "antd";
import { connect } from "react-redux";
import { addGoods } from "./store/actionCreator.js";
class GoodList extends Component {
  state = {
    goodList: [
      {
        id: 1001,
        name: "苹果",
        num: 1,
        url:
          "https://img.51miz.com/Element/00/88/89/76/32bca5c8_E888976_558d4485.png!/quality/90/unsharp/true/compress/true/format/png",
        price: 9.85
      },
      {
        id: 1002,
        name: "葡萄",
        num: 1,
        url:
          "https://img.51miz.com/Element/00/87/00/69/f19ec697_E870069_7085f024.png!/quality/90/unsharp/true/compress/true/format/png",
        price: 6.56
      },
      {
        id: 1003,
        name: "香蕉",
        num: 1,
        url:
          "https://img.51miz.com/Element/00/83/77/13/fedccfa9_E837713_c0f471fa.png!/quality/90/unsharp/true/compress/true/format/png",
        price: 3.6
      }
    ]
  };
  // handleGoods = goods=>{
  //   //   console.log(goods)
  //   store.dispatch(addGoods(goods))
  // }
  render() {
    return (
      <ul className={styles.ulList}>
        {this.state.goodList.map(item => {
          return (
            <li className={styles.li} key={item.id}>
              <img width="250px" src={item.url} alt="" />
              <p>商品名：{item.name}</p>
              <p>￥{item.price}</p>
              <Button
                style={{
                  backgroundColor: "rgb(103,194,58)",
                  borderColor: "rgb(103,194,58)"
                }}
                type="primary"
                onClick={() => {
                  this.props.handleGoods(item);
                }}
              >
                加入购物车
              </Button>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default connect(
  state => {
    return {
      goodsList: state
    };
  },
  dispatch => {
    return {
      handleGoods(goods) {
        dispatch(addGoods(goods));
      }
    };
  }
)(GoodList);
