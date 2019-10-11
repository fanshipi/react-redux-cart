import React,{Component} from 'react'

import bus1 from './bus1'
export default class Sist2 extends Component {
    state = {}
    componentDidMount(){
        bus1.on('myevent',data=>{
            this.setState(data)
            console.log(data);
            
        })
    }
    render() {
        return (
            <div>
                {/* this.state报错 */}
                <p>Sist2---{this.state.name}</p>
            </div>
        )
    }
}