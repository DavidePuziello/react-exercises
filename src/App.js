import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter"
import { ClickCounter } from "./ClickCounter";

export class App extends React.Component {
    render() {
        return <div>
            <Hello />
            <Welcome />
            <Counter initialValue={22} incrementAmount={2} incrementInterval={3000}/>
            <ClickCounter initialValue={8}/>
        </div>
    }
}