import React,{Component} from 'react'

import bus from './bus'

export default class Bro1 extends Component{
    state = {
        name:"韦小宝"
    }
    sendValue= ()=>{
        bus.emit('sendSomething',this.state)
    }
    render() {
        return (
            <div>
                <span>Bro1</span>
                <button onClick={this.sendValue}>.....</button>
            </div>
        )
    }
}