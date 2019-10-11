import React, { Component } from 'react'
import store from './store'
import {add,minus} from './store/actionCreator'
export default class AddAndMinus extends Component {
    handleAdd = ()=>{
        store.dispatch(add(3))
    }
    handleMinus = ()=>{
        store.dispatch(minus(5))
    }
    render() {
        return (
            <div>
                <span>加 & 减</span><br/>
                <button onClick={this.handleAdd}>+</button> &nbsp;&nbsp;
                &nbsp;<button onClick={this.handleMinus}>-</button>
                <hr/>
            </div>
        )
    }
}
