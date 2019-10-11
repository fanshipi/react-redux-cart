import React, { Component } from 'react'
// import Cat from './Cat'
import Common from './Common'
import Img from './Img.jpg'
export default class Index extends Component {
    render() {
        return (
            <div>
                {/* <Cat/> */}
                <Common  children={(x,y)=>{
                    return <div>
                        <img src={Img} alt="" style={{position:'absolute',left:x-50,top:y-50}}/>
                    </div>
                    }}/>
            </div>
        )
    }
}
