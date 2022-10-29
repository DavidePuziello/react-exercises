import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0 }) {
    const [count, setCount] = useState(initialValue)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [count])

    return <div>
        <CounterDisplay displayCount={count} />
    </div>
}




/* import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {

    state= {
        count : this.props.initialValue,
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.incrementAmount,
                }
            })
        }, this.props.incrementInterval)
    }
    
    render() {
        return <div>
            <CounterDisplay displayCount={this.state.count} />
        </div>
    }
} */