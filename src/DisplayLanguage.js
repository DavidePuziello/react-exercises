import { CreateContext } from "./LanguageContext"

const Strings = {
    en: {
        HELLO : "Hello, this is the English verision"
    },
    it: {
        HELLO : "Ciao, questa è la versione italiana"
    }
}

export function DisplayLanguage(){
    return (
        <CreateContext.Consumer>
            {language =>{
                return (
                    <h1>{Strings[language].HELLO}</h1>
                )
            }}
        </CreateContext.Consumer>
    )
}