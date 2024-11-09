import { useState } from "react"

export default function Count () {

    const [countValue, setCountValue] = useState (0)

    const countChanger = () => {
        setCountValue(countValue + 1)
    }

    console.log("Joseph")

     return (
        <div>
            <button onClick={countChanger}>Click to Count</button>

            <h1>{countValue}</h1>
        </div>
     )
}