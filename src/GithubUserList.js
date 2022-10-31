import { useEffect, useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {

    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    function handleInputChange(event) {
        const value = event.target.value
        setInput(value)
    }

    function handleButtonClick() {
        setList([...list, input])
    }

    useEffect(() => {
        console.log(list)
    }, [list])

    return <>
        <label>
            Add a Github user:
            <input name='input' value={input} onChange={handleInputChange} />
        </label>
        <button onClick={handleButtonClick}>Search</button>
        <div>
            {list.map((name,index) => <GithubUser key={index} username={name} />
            )}
        </div>
    </>
}