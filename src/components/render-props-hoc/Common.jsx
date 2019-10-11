import React, { Component } from 'react'

export default class Common extends Component {
    state = {
        x:0,
        y:0
    }
    handleMousemove = e => {
        this.setState({
            x:e.clientX,
            y:e.clientY
        }
        )
    }
    componentDidMount() {
        window.addEventListener('mouseover',this.handleMousemove)
    }
    componentWillMount() {
        window.removeEventListener('mouseover',this.handleMousemove)
    }
    render() {
        return (
           this.props.children(this.state.x,this.state.y)
        )
    }
}
