import React, { useState } from "react";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { GithubUserList } from "./GithubUserList";
import { HookForm } from "./HookForm";

export function App() {
    const [showCounter, setShowCounter] = useState(true)

    function handleToggleCounter() {
        setShowCounter(s => !s)
    }

    return <div>
        <LanguageContext />
        <Container title="This is my title">
            <Welcome />
            <button onClick={handleToggleCounter}>Toggle Counter</button>
            {showCounter && <Counter />}
            <GithubUserList />
            <HookForm />
        </Container>
    </div>
}