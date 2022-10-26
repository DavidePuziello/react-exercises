import React from "react";
import { Hello } from "./Hello";
import { Counter } from "./Counter"
import { ClickCounter } from "./ClickCounter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { TodoList } from "./TodoList";

export class App extends React.Component {
    render() {
        return <div>
            <Hello />
            <InteractiveWelcome />
            <Counter initialValue={22} incrementAmount={2} incrementInterval={3000}/>
            <ClickCounter />
            <UncontrolledLogin />
            <TodoList />
        </div>
    }
}