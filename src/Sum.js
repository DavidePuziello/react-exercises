export function Sum(props) {
    let result = props.number.reduce((sum, current) => sum + current, 0)

    return <h1>{result}</h1>
}