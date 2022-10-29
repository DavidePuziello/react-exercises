import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return <div>
            <LanguageContext />
            <Container title="This is my title">
                <Welcome />
                <ClickCounter />
            </Container>
        </div>
    }
}