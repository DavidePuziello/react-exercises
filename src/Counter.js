import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {

    state= {
        count : this.props.initialValue,
    }

    handleCounterIncrement = () => {
        this.setState((state) => {
            return {
                count: state.count + this.props.incrementAmount
            }
        })
    }

    render() {
        return <div>
            <CounterDisplay displayCount={this.state.count} />
            <button onClick={this.handleCounterIncrement}>Increment</button>
        </div>
    }
}