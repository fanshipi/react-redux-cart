import React, { Component } from 'react'
import store from './store'
export default class Show extends Component {
    constructor() {
        super() 
        this.state = {
            count:store.getState()
        }
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
                ShowPage---{this.state.count}
            </div>
        )
    }
}
