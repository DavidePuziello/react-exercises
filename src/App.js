import React from "react";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { ClickCounter } from "./ClickCounter";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return <div>
            <LanguageContext />
            <Container title="This is my title">
                <Welcome />
                <ClickCounter onCounterChange= {(count) => {
                    return console.log("The counter is now " + count)
                }}/>
            </Container>
        </div>
    }
}