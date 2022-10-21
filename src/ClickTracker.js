import React from "react";

export class ClickTracker extends React.Component {
    state= {
        name: ""
    }

    handleTrackEvent= (event) => {
        this.setState(() => {
            return {
                name: event.target.name
            }
        })
    }

    render() {
        return <>
            {this.state.name == false
            ? <h1>Your role is "Summoner"</h1>
            : <h1>Your role is "{this.state.name}"</h1>}
            <button name="Top" onClick={this.handleTrackEvent}>Top</button>
            <button name="Jungler" onClick={this.handleTrackEvent}>Jungler</button>
            <button name="Middle" onClick={this.handleTrackEvent}>Middle</button>
            <button name="ADC" onClick={this.handleTrackEvent}>ADC</button>
            <button name="Support" onClick={this.handleTrackEvent}>Support</button>
        </>
    }
}

// Non sono sicuro se sia il modo giusto per fare il rendering condizionale