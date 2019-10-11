import React, { Component } from "react";
import { Table, Spin,Button,message,InputNumber ,Modal} from "antd";

// import store from "./store";
import { connect } from 'react-redux'
import { updateGoods,asyncDeleteGoods,deleteGoods } from "./store/actionCreator.js";

const { Column } = Table;
const { confirm } = Modal;

class Cart extends Component {
  constructor(props) {
    super();
   
    props.goodsList.forEach(item=>{
      item.key = item.id
    })
    this.state = {
      goodsList: props.goodsList
    };
  }
  componentDidMount() {
    
  }
  componentWillUnmount() {
    this.setState = () => {
      return;
    };
  }
  componentWillReceiveProps(newProps) {
    newProps.goodsList.forEach(item=>{
      item.key = item.id
    })
    this.setState({
      goodsList:newProps.goodsList
    })
  }
 
  deleteGoods = id => {
    // console.log(id)
    confirm({
      title: "提示",
      content: "确认删除吗？",
      okText:"确认",
      okType:'danger',
      cancelText:'取消',
      onOk:()=> {
        this.props.deleteGoodsList(id)
        // store.dispatch(asyncDeleteGoods(id))
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
              onChange={value => this.props.onChange(record.id, value)}
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

export default connect(
  (state ) => {
    return {
      goodsList: state
    }},
    dispatch => {
      return {
        onChange(id,num){
          dispatch(updateGoods({ id, num }))
        },
        deleteGoodsList(id) {
          dispatch(asyncDeleteGoods(id))
        }
      }
    }
)(Cart)