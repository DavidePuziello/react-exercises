import React from 'react'
import { Age } from './Age'


export class Welcome extends React.Component {
    render() {
        return <>
            <p>Welcome, {this.props.name}</p>
            <Age age={19}/>
        </>
    }
}

Welcome.defaultProps = {
    name: <strong>Davide</strong>,
    age: "26"
}