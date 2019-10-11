import React, { Component } from 'react'
import AddAndMinus from './AddAndMinus'
import Show from './Show'
export default class Index extends Component {
    render() {
        return (
            <div>
                <AddAndMinus/>
                <Show/>
            </div>
        )
    }
}
