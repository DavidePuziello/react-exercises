import React from "react";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { TodoList } from "./TodoList";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return <div>
            <LanguageContext />
            <Container title="This is my title">
                <Welcome />
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