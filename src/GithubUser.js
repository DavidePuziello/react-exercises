import { useEffect, useState } from "react"

export function GithubUser({ username }) {
    const [data, setData] = useState(null)

    async function fetchGithubUser(username) {

        const response = await fetch(`https://api.github.com/users/${username}`)
        const json = await response.json()

        setData(json)
    }

    useEffect(() => {
        fetchGithubUser(username)
    }, [username])

    return <div>
        {data && <h1>{data.name}</h1>}
    </div>
}