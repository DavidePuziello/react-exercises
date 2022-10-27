import React from "react";

export class TodoList extends React.Component {
    state = {
        items: [
            "Top",
            "Jungler",
            "Mid",
            "Adc"
        ]
    }


    handleInputChange = (event) => {
        const value = event.target.value

        this.setState({
            newrole: value
        })
    }

    handleFormSubmit = (event) => {
        const value = event.target.value

        this.setState({
            newrole: value
        })

        this.state.items.push(this.state.newrole)
    }

    handleResetChange = () => {
        this.setState({
            items: [
                "Top",
                "Jungler",
                "Mid",
                "Adc"
            ]
        })
    }

    handleRemoveItem = (event) => {
        let newItems = [...this.state.items]
        newItems.splice(event, 1)
        this.setState({
            items: newItems
        })
    }


    render() {
        const items = this.state.items.map((name, index) =>
            <li key={index}>
                {name}
                <button key={index} onClick={this.handleRemoveItem}>Remove Item</button>
            </li>)

        return <>
            <label>
                Role:
                <input placeholder="Support" value={this.state.input} onChange={this.handleInputChange} />
            </label>
            <button onClick={this.handleFormSubmit} disabled={this.state.newrole !== "Support"}>Add the missed role</button>
            <button onClick={this.handleResetChange}>Reset</button>

            <ul>{items}</ul>
        </>
    }
}