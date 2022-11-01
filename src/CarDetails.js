import { useRef, useState } from "react";

export function CarDetails({ initialData = {
    model: "Coupe",
    year: 2019,
    color: "blue"
} }) {

    const modelRef = useRef()
    const yearRef = useRef()
    const colorRef = useRef()

    const [model, setModel] = useState(initialData.model)
    const [year, setYear] = useState(initialData.year)
    const [color, setColor] = useState(initialData.color)

    function handleModelChange() {
        setModel(modelRef.current.value)
    }

    function handleYearChange() {
        setYear(yearRef.current.value)
    }

    function handleColorChange() {
        setColor(colorRef.current.value)
    }

    function handleFormReset(e) {
        e.preventDefault()
        modelRef.current.value = initialData.model;
        yearRef.current.value = initialData.year;
        colorRef.current.value = initialData.color;
        console.log(model, year, color)
    }

    return <form onSubmit={handleFormReset}>
        <h1>Car Details</h1>
        <input ref={modelRef} value={model} onChange={handleModelChange} defaultValue={initialData.model} />
        <input ref={yearRef} value={year} onChange={handleYearChange} defaultValue={initialData.year} />
        <input ref={colorRef} value={color} onChange={handleColorChange} defaultValue={initialData.color} />
        <button>Reset</button>
    </form>

}