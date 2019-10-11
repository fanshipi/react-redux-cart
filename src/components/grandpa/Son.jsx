import React,{Component} from 'react'
import Grandson from './Grandson' 
import Context from './context.js'

export default class Bro1 extends Component{
   
    render() {
        return (
            <div>
                <span>son</span>
                <Context.Consumer>
                    {
                        data => {
                            return <div>
                                <p style={{color:data}}>儿子组件----{data}</p>
                                <Grandson/>
                            </div>
                        }
                    }
                </Context.Consumer>
            </div>
        )
    }
}