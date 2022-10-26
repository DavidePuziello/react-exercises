import React from "react";

export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false,
        disabled: true
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

    onLogin = (event) => {
        console.log(event)
        const verify = event.target.disabled
        this.setState({
            disabled : verify
        })
        console.log(verify)
    }

    render() {
        return <>
            <form onSubmit={this.onLogin}>
                <h1>Login</h1>
                <input name="username" value={this.state.username} onChange={this.handleInputChange} />
                <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
                <button disabled={!this.state.username || !this.state.password} type="submit">Login</button>
            </form>
        </>
    }
}