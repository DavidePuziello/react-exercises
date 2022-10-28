import React, { createContext } from "react";
import { DisplayLanguage } from "./DisplayLanguage";

export const CreateContext = createContext('en')

export class LanguageContext extends React.Component {
    state = {
        language: "en"
    }


    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    render() {
        return (
            <>
                <select value={this.state.language} onChange={this.handleLanguageChange}>
                    <option value="en">ENGLISH</option>
                    <option value="it">ITALIANO</option>
                </select>
                <CreateContext.Provider value={this.state.language}>
                    <DisplayLanguage />
                </CreateContext.Provider>
            </>
        )
    }
}