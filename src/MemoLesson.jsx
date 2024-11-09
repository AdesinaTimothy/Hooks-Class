import { useState, useMemo } from "react"

export default function MemoLesson () {

    const [countValue, setCountValue] = useState (0)
    const [number, setNumber] = useState ('')

    const bigCalculation = (number) => {
        let loopTime = 0
        for (let x = 0; x < 100000000; x++) {
            loopTime += number
        }

        return loopTime
    }

    // bigCalculation(number)

    const addedValue =  useMemo (() => bigCalculation(number)
        
    , [number])

    return (
        <div>

        <p>Huge Part of Application</p>
        <input 
        type="number" 
        name = "number"
        value = {number}
        onChange={(e) => setNumber(parseInt(e.target.value) )}
        />

        <h1>The result of The Big Calc is : {addedValue}</h1>

        <h3>Light Part of The Component</h3>
        <button onClick={() => setCountValue(countValue +1)}>Click to Count</button>

        <h1>Count is : {countValue}</h1>

        </div>
    )
}