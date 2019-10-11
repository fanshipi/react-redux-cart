import React,{Component} from 'react'

export default class Controls extends Component{
    state = {
        username:'admin',
        password:'123456'
    }
    login= e =>{
        e.preventDefault()
    }
    // changeUserName = e=>{
    //     this.setState({
    //         username:e.target.value
    //     })
    // }
    // changeUserPassword = e =>{
    //     this.setState({
    //         password:e.target.value
    //     })
    // }
    changeValue = e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
            <div>
                <span>受控组件Demo</span>
                <form onSubmit={this.login}>
                    <label htmlFor="">用户名</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.changeValue}/><br/>
                    <label htmlFor="">密码</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.changeValue}/><br/>
                    <input type="submit"  value="登录"/>
                </form>
            </div>
        )
    }
}