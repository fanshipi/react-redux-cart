import React, { Component } from 'react'

export default class Uncontrols extends Component {
    constructor() {
        super()
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        // document.getElementById('inputId').focus()
        // console.log(this.refs.refInput)

        // console.log(this.inputRef.current)
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                {/* <input id="inputId" type="text" ref="refInput"/> */}
                <input name="inputName" type="text" ref={this.inputRef}/>
            </div>
        )
    }
}
