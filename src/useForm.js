import { useEffect, useState } from "react";

export function useForm() {
    const [data, setData] = useState({
        username: "",
        password: ""
    }) 

    function handleInput(event) {
        const name = event.target.name
        const value = event.target.value

        setData(() => {
            return {
                [name]: value
            }
        })
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    return {
        username: data.username,
        password: data.password,
        onInput: handleInput
    }
}