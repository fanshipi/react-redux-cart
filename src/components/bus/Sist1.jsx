import React,{Component} from 'react'
import { log } from 'util';

import bus1 from './bus1'

export default class Sist1 extends Component {
    state = {
        name:"Lina",
        gender:'女'
    }
    sendVal = () =>{
        // console.log(this.state);
        bus1.emit('myevent',this.state)
    }
    render() {
        return(
            <div>
                <span>Sist1</span>
                <button onClick={this.sendVal}>Sist1</button>
            </div>
        )
    }
}