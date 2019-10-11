import React, { Component } from 'react'

import {Link} from 'react-router-dom' 

export default class NewsList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/newsdetail/?newsId=123456'>哦哦哦哦</Link></li>
                    <li>莫雷</li>
                    <li>国庆返程高峰期</li>
                </ul>
            </div>
        )
    }
}
