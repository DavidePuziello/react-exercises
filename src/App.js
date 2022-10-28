import React from "react";
import { Container } from "./Container";
import { Hello } from "./Hello";
import { LanguageContext } from "./LanguageContext";
import { TodoList } from "./TodoList";

export class App extends React.Component {
    render() {
        return <div>
            <LanguageContext />
            <Container title="This is my title">
                <Hello />
                <TodoList render={(items, handleRemoveItem) => {
                    const itemsViewer = items.map((name, index) =>
                        <li key={index}>
                            {name}
                            <button key={index} onClick={handleRemoveItem}>Remove Item</button>
                        </li>)

                    return (
                        <li>
                            {itemsViewer}
                        </li>)
                }} />
            </Container>
        </div>
    }
}