import React, { Component } from 'react'

export default class NewsDetail extends Component {
    constructor(props){
        super()
        const searchParams = new URLSearchParams(props.location)
        this.state = {
            // newsId:props.match.params.newsId
            newsId:searchParams.get('newsId')
        }
    }
    render() {
        return (
            <div>
                新闻详情
            </div>
        )
    }
}
