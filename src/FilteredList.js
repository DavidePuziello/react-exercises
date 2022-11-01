import { useMemo } from "react"

const list = [
    { name: "Davide", id: 1325, age: 27 },
    { name: "Giacomo", id: 1326, age: 25 },
    { name: "Jaman", id: 1327, age: 16 },
    { name: "Giada", id: 1328, age: 17 },
    { name: "Karim", id: 1329, age: 23 }
]

export function FilteredList() {
    const users = useMemo(() => list.map(user => user.age > 18 && <div>
    <h1>The name of User is: "{user.name}"</h1>
    <p>And he is {user.age} years old</p>
    </div>), [])

    return <>
        {users}
    </>
}