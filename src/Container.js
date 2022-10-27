import React from "react";

export class Container extends React.Component {
    render() {
        return <div className="container">
            <div><h1 style={{color: "blue"}}>{this.props.title}</h1></div>
            <div>{this.props.children}</div>
        </div>
    }
}