import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

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

    return <div style={{marginTop: 24}}>
        <label>
            Add a Github user:
            <input name='input' value={input} onChange={handleInputChange} />
        </label>
        <button onClick={handleButtonClick}>Search</button>
        <div>
            {list.map((name,index) => <>
            <Link to={name} key={index} name={name}>{name}</Link>
            <Outlet />
            </>
            )}
        </div>
    </div>
}