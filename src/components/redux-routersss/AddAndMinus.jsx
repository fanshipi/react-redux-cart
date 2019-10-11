import React, { Component } from 'react'
import store from './store';
import {add,minus,incrementAsync} from './store/actionCreator'
export default class AddAndMinus extends Component {
    handleAdd = () =>{
        // store.dispatch({
        //     type:'Add'
        // })
        // store.dispatch(add(3))
        store.dispatch(incrementAsync(5))
    }
    handleMinus = () =>{
        // store.dispatch({
        //     type:'Minus'
        // })
        store.dispatch(minus(5))
    }
    render() {
        return (
            <div>
                <span>加和减</span><br/>
                <button onClick={this.handleAdd}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={this.handleMinus}>-</button>
                <hr/>
            </div>
        )
    }
}
