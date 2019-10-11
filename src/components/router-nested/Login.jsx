import React, { Component } from 'react'

import './Login.css'
export default class Login extends Component {
    state = {
        username:"",
        password:""
    }
    login = (e)=>{
        e.preventDefault();
        const {username,password} = this.state;
        if(username =='admin' && password == '123456'){
            this.props.history.push('/layout')
        }
    }

    changeValue = e=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <div className="loginPage">
                <form onSubmit={this.login}>
                    <label htmlFor="">用户名:</label>
                    <input type="text"  name="username" onChange={this.changeValue} /><br/>
                    <label htmlFor="">密码</label>
                    <input type="password"  name="password" onChange={this.changeValue} /><br/>
                    <input type="submit" value="登录"/>
                </form>
            </div>
        )
    }
}
