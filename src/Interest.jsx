import { useState } from "react"

export default function InterestCalculator () {

    const [principalAmount, setPrincipalAmount ] = useState(" ")
    const [interestRate, setInterestRate] = useState(" ")
    const [roi, setRoi] = useState("")

    const calculateRoi = () => {
        let interest = (principalAmount * interestRate) / 100 
        setRoi(interest)
    }

return (
    <div>
        <h1>Claculate Your Annual Interest</h1>
        {/* <form action=""> */}
            <div className="input-group">
                <label htmlFor="principal">Enter Amount</label>
                <input 
                type="number" 
                id= "principal"
                value = {principalAmount || " "}
                onChange = {(e) => setPrincipalAmount(e.target.value)}
                />
            </div>

            <div className="input-group">
            <label htmlFor="interest">Preferred Interest Rate (%)</label>
                <input 
                type="number" 
                id= "rate"
                value = {interestRate || " "}
                onChange = {(e) => setInterestRate(e.target.value)}
                />
            </div>

            <button onClick = {calculateRoi}>See ROI</button>
            <h1>ROI(NGN): {roi}</h1>
        {/* </form> */}
    </div>
)

}