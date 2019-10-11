import React from 'react'

export default class Counter extends React.Component{
    constructor(props) {
        super()
        // state
        this.state = {
            count:props.initCount
        }
    }
    add = ()=>{
        // console.log(this);
        // this.state.count++
        // mutations
        this.setState({
            count:++this.state.count
        },()=>{
            this.props.callback(this.state.count)
        })
    }
    render() {
        return <div>
            <span>{this.state.count}</span>
            {/* <button onClick={this.add.bind(this)}>+1</button> */}
            <button onClick={this.add}>+1</button>
        </div>
    }
}
