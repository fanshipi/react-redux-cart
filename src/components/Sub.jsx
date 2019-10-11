import React from 'react'

export default class Sub extends React.Component {
    constructor(props) {
        super()
        this.state = {
            c:props.initCount
        }
    }
    sub= ()=>{
        this.setState({
            c:--this.state.c
        })
    }
    render() {
        return <div>
            <span>{this.state.c}</span>
            <button onClick={this.sub}>-1</button>
        </div>
    }
}