import React,{Component} from 'react'
import Context1 from './context1'
export default class Grandson1 extends Component {
    render() {
        return (
            <div>
                <Context1.Consumer>
                    {
                        data =>{
                            return <div>
                                <p>数据{data}</p>
                            </div>
                        }
                    }
                </Context1.Consumer>
            </div>
        )
    }
}