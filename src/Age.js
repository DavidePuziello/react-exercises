import React from 'react'

export class Age extends React.Component {
        render() {
            return <>
            {this.props.age > 18 && this.props.age < 65 /* && this.props.name === "John" */
            ? <p>Your age is {this.props.age}</p>
            : <p>How old are you?</p>}
            </>
        }
}

//L'esercizio chiede che il "prop.name" di Age deve essere uguale a "Jhon", per questo ho inserito questo commento.
// Modifica effettuata nel componente "Welcome"