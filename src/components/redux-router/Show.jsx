import React, { Component } from 'react'
import store from './store'
export default class Show extends Component {
    // 获取store的数据
    state = {
        count:store.getState()
    }
    // 数据发生改变时
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                count:store.getState()
            })
        }) 
    }
    render() {
        return (
            <div>
                <p>得到的结果：{this.state.count}</p>
            </div>
        )
    }
}
