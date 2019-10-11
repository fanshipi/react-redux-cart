import React, { Component } from 'react'

export default class Mouse extends Component {
    state={
        x:0,
        y:0
    }
    handleMouseMove= e=>{
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    componentDidMount() {
        window.addEventListener('mousemove',this.handleMouseMove)
    }
    componentWillUnmount() {
        window.removeEventListener('mouseover',this.handleMouseMove)
    }
    render() {
        return (
            <div>
                鼠标的位置:X:{this.state.x}-----Y:{this.state.y}
            </div>
        )
    }
}
