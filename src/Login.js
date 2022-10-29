import { useState } from "react"

export function Login() {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })

    function handleInputChange(event) {
        const { name, type, value, checked } = event.target

        setData(data => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function handleResetChange() {
        setData({
            username: "",
            password: "",
            remember: false
        })
    }
    
    function onLogin() {
        console.log(data)
    }

    return <>
        <h1>Login</h1>
        <input name="username" value={data.username} onChange={handleInputChange} />
        <input name="password" type="password" value={data.password} onChange={handleInputChange} />
        <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange} />
        <button onClick={onLogin}>Login</button>
        <button onClick={handleResetChange}>Reset</button>
    </>
}






/* import React from "react";

export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false,
        login: false
    }

    handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    onLogin = () => {
        this.setState({
            login: true
        })

        console.log(this.state)
    }

    handleResetChange = () => {
        this.setState({
            username: "",
            password: "",
            remember: false,
            login: false
        })
    }

    render() {
        const LoginStyle = {
            backgroundColor: this.state.password.length > 8 ? "green" : "red"
        }

        return <>
            <h1>Login</h1>
            <input name="username" value={this.state.username} onChange={this.handleInputChange} />
            <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
            <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
            <button disabled={!this.state.username || !this.state.password} onClick={this.onLogin} style={LoginStyle}>Login</button>
            <button onClick={this.handleResetChange}>Reset</button>
        </>
    }
} */