import React,{Component} from 'react'
import Son1 from './Son1'
import Context1 from './context1'
export default class Grandpa1 extends Component {
    state = {
        words:'Grandpa'
    }
    changeWords=(words)=>{
        this.setState({
            words
        })
    }
    render() {
        return (
            <div>
                <hr/>
                <span>Grandpa</span>&nbsp;
                <button onClick={()=>{this.changeWords('son')}}>son</button>&nbsp;&nbsp;<button onClick={()=>{this.changeWords('Grandson')}}>Grandson</button>
                <Context1.Provider value= {this.state.words}>
                    {
                        <Son1 />
                    }
                </Context1.Provider>
            </div>
        )
    }
}