import { useContext } from "react"
import { CreateContext } from "./LanguageContext"

const Strings = {
    en: {
        HELLO : "Hello, this is the English version"
    },
    it: {
        HELLO : "Ciao, questa è la versione italiana"
    }
}

export function DisplayLanguage(){
    const language = useContext(CreateContext)
    return <h1>{Strings[language].HELLO}</h1>
}