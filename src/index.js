import React from 'react'
import ReactDOM from 'react-dom/client'

class Hello extends React.Component {
    render() {
        return <h1>Hello, World!</h1>
    }
}

class App extends React.Component {
    render() {
        return <div>
            <Hello />
        </div>
    }
}

let root = ReactDOM.createRoot(document.getElementById("root"))
let app = <App />

root.render(app)