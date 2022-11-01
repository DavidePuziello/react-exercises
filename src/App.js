import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome"
import { Counter } from "./Counter"
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";

export function App() {
    return <div>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/users">Github User</Link>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/users" element={<GithubUserList />}>
                <Route index element={<h3>Add a user and select it</h3>} />
                <Route path=":username" element={<ShowGithubUser />} />
            </Route>
            <Route path="*" element={<div><h1>Page not found</h1></div>} />
        </Routes>
    </div>
}