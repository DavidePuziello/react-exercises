import React from 'react'
import { Age } from './Age'


export function Welcome(props) {
    return <div>
        <h2>Hello, {props.name}</h2>
        <Age age={props.age} />
    </div>
}



/* export class Welcome extends React.Component {
    render() {
        return <div className='welcome'>
            <p>Welcome, {this.props.name}</p>
            <Age age={this.props.age} />
        </div>
    }
} */

Welcome.defaultProps = {
    name: "Davide",
    age: 19
}