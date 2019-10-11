import React, { Component } from "react";
import { Table, Spin,Button,message,InputNumber ,Modal} from "antd";

import store from "./store";
import { updateGoods,asyncDeleteGoods } from "./store/actionCreator.js";
const { Column } = Table;
const { confirm } = Modal;

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      goodsList: []
    };
  }
  componentDidMount() {
    this.getNewData();

    store.subscribe(() => {
      this.getNewData();
    });
  }
  componentWillUnmount() {
    this.setState = () => {
      return;
    };
  }
  getNewData() {
    const initGoodsList = store.getState();
    initGoodsList.forEach(item => {
      item.key = item.id;
    });

    this.setState({
      goodsList: initGoodsList
    });
  }
  onChange(id, num) {
    store.dispatch(updateGoods({ id, num }));
  }
  deleteGoods = id => {
    // console.log(id)
    confirm({
      title: "提示",
      content: "确认删除吗？",
      okText:"确认",
      okType:'danger',
      cancelText:'取消',
      onOk() {
        store.dispatch(asyncDeleteGoods(id))
        message.info('确认删除');
      },
      onCancel() {
        message.info('已取消删除');
      }
    });
  };
  render() {
    const { goodsList } = this.state;
    return (
      <Table dataSource={goodsList}>
        <Column title="水果名称" dataIndex="name" key="name" />
        <Column
          title="图片"
          dataIndex="url"
          key="url"
          render={url => <img src={url} width="100" height="80" />}
        />
        <Column
          title="数量"
          key="num"
          render={record => (
            <InputNumber
              size="small"
              min={1}
              max={100000}
              defaultValue={record.num}
              onChange={value => this.onChange(record.id, value)}
            />
          )}
        />
        <Column title="单价" dataIndex="price" key="price" />
        <Column
          tilte="总价"
          render={record => <span>{record.price * record.num}</span>}
        />
        <Column
          title="操作"
          render={record => (
            <Button type="danger" onClick={() => this.deleteGoods(record.id)}>
              删除
            </Button>
          )}
        />
      </Table>
    );
  }
}
