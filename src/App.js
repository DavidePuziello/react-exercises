import React from "react";
import { Container } from "./Container";
import { Hello } from "./Hello";
import { TodoList } from "./TodoList";

export class App extends React.Component {
    render() {
        return (
            <Container title="This is my title">
                <Hello />
                <TodoList render={(items, handleRemoveItem) => {
                    const itemsArr = items
                    const remove = handleRemoveItem
                    const itemsViewer = itemsArr.map((name, index) =>
                        <li key={index}>
                            {name}
                            <button key={index} onClick={remove}>Remove Item</button>
                        </li>)

                    return (
                        <li>
                            {itemsViewer}
                        </li>)
                }} />
            </Container>
        )
    }
}