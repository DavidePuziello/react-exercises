import React from "react";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { Login } from "./Login";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return <div>
            <LanguageContext />
            <Container title="This is my title">
                <Welcome />
                <Login />
            </Container>
        </div>
    }
}