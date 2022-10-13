import React from 'react'
import ReactDOM from 'react-dom/client'

class Hello extends React.Component {
    render() {
        return <h1>Hello, World!</h1>
    }
}

let root = ReactDOM.createRoot(document.getElementById("root"))
let hello = <Hello />

root.render(hello)