import React, { Component } from 'react'
import Img from './Img.jpg'
function withCoordinate (WrappedComponent) {
    return class extends Component {
        state = {
            x:0,
            y:0
        }
        handleMouseover = e =>{
            this.setState({
                x:e.clientX,
                y:e.clientY
            })
        }
        componentDidMount() {
            window.addEventListener('mouseover',this.handleMouseover)
        }
        componentWillUnmount() {
            window.removeEventListener('mouseover',this.handleMouseover)
        }
        render() {
            return <WrappedComponent x={this.state.x} y={this.state.y}></WrappedComponent>
        }
    }
}
class Mouse extends Component {
    render() {
        return (
            <div>
                {this.props.x}---{this.props.y}
            </div>
        )
    }
}
const EnhancedMouse = withCoordinate(Mouse)
export default class HOC extends Component {
    render() {
        return (
            <div>
                <EnhancedMouse/>
            </div>
        )
    }
}
