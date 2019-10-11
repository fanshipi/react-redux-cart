import React from 'react'

class Second extends React.Component {
    constructor(){
        // 继承
        super()
        // Vue中的data
        this.state = {
            name:"Lina"
        }
    }
    clickMe(){
        console.log(1111)
        console.log(this);//undefined
        console.log(Second);
        
        
    }
    render(){
        return <div>
            <p>I'm Lina...{this.state.name}</p>
            {/* <button onClick={this.clickMe}>log</button> */}
            <button onClick={this.clickMe.bind(this)}>log</button>
        </div>
    }
}

export default Second

