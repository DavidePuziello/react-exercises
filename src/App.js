import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome"
import { Counter } from "./Counter"
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
    return <div>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/DavidePuziello">Github User</Link>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/counter" element={<Counter />} />
            <Route path=":username" element={<ShowGithubUser />} />
            <Route path="*" element={<div><h1>Page not found</h1></div>} />
        </Routes>
    </div>
}