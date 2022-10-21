import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter"
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";

export class App extends React.Component {
    render() {
        return <div>
            <Hello />
            <Welcome />
            <Counter initialValue={22} incrementAmount={2} incrementInterval={3000}/>
            <ClickCounter />
            <ClickTracker />
        </div>
    }
}