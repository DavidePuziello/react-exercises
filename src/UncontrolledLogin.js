import React from "react";

export class UncontrolledLogin extends React.Component {
    handleFormSubmit = (event) => {
        event.preventDefault()

        const name = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            name,
            password,
            remember
        })
    }

    render() {
        return <form onSubmit={this.handleFormSubmit}>
            <input name="username" required/>
            <input name="password" required/>
            <input name="remember" type="checkbox"/>
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    }
}