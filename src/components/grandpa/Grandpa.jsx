import React,{Component} from 'react'
import Son from './Son'
import Context from './context.js'

export default class Bro1 extends Component{
    state = {
        color:'red'
    }
    changeColor = color => {
        // console.log(color);
        this.setState({
            color
        })
    }
    render() {
        return (
            <div>
                <span>Grandpa</span>
                <button onClick={()=>this.changeColor('red')}>红色</button>&nbsp;&nbsp;<button onClick={()=>{this.changeColor('purple')}}>紫色</button>
                <Context.Provider value={this.state.color}>
                    <Son/>
                </Context.Provider>
            </div>
        )
    }
}