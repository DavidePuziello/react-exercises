import React from "react";
import { Container } from "./Container";
import { Hello } from "./Hello";
import { Login } from "./Login";

export class App extends React.Component {
    render() {
        return (
        <Container title="This is my title">
            <Hello />
            <Login />
        </Container>
        )
    }
}