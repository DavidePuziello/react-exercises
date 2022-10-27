import React from "react";

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
            backgroundColor: this.state.password.length > 8 ? "red" : "green"
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
}