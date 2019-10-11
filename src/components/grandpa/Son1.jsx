import React,{Component} from 'react'
import Context1 from './context1'
import Grandson1 from './Grandson1'

export default class Son1 extends Component {
    render() {
        return (
            <div>
                <Context1.Consumer>
                    {
                        data=>{
                            return <div>
                            dataSon---{data}
                             <Grandson1></Grandson1>
                            </div>
                        }
                    }
                </Context1.Consumer>
            </div>
        )
    }
}