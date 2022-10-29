import React from "react";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { Sum } from "./Sum";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return <div>
            <LanguageContext />
            <Container title="This is my title">
                <Welcome />
                <Sum number={[1, 2, 3, 4, 5]}/>
            </Container>
        </div>
    }
}