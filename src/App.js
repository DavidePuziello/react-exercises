import React from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome"
import { Counter } from "./Counter"
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
    return <div>
        <Routes>
            <Route path="/" element={<Welcome name="Stefania" />} />
            <Route path="/counter" element={<Counter />} />
            <Route path=":username" element={<ShowGithubUser />}>
            </Route>
        </Routes>
    </div>
}