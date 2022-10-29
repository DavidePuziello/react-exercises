import { useState } from "react"


export function ClickCounter({ initialValue = 0}) {

    const [count, setCount] = useState(initialValue)

    function handleCounterClick() {
        setCount(currentCount => currentCount + 1)
    }

    return <>
        <h1>You clicked {count} times</h1>
        <button onClick={handleCounterClick}>Click me!!</button>
    </>
}

/* import React from "react";


export class ClickCounter extends React.Component {
    state = {
        count: 0
    }

    handleCounterClick = () => {
        this.setState((state) => {
            return {
                count: state.count + 1
            }
        })
    }

    render() {
        return <>
            <h1>You clicked {this.state.count} times</h1>
            <button onClick={this.handleCounterClick}>Click me!!</button>
        </>
    }
} */