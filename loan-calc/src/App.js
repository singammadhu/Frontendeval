import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEmi] = useState(0);

  // Calculate EMI function
  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interest) / 12 / 100; // Monthly interest
    const n = parseFloat(years) * 12; // Number of months
    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue.toFixed(2)); // Set EMI to state
  };

  // useEffect to recalculate EMI whenever the inputs change
  useEffect(() => {
    calculateEMI();
  }, [principal, interest, years]);

  return (
    <div className="loan-cal">
      <h1>Mortgage Calculator</h1>
      <div className="inputs">
        <p>Principal:</p>
        <input
          type="number"
          // id="principal"
          placeholder="Enter your loan amount"
          value={principal} // Ensure the input reflects the current state
          onChange={(e) => setPrincipal(e.target.value)} // Update principal state
        />
        <p>Interest Rate:</p>
        <input
          type="number"
          id="interest"
          placeholder="Enter your interest rate"
          value={interest} // Ensure the input reflects the current state
          onChange={(e) => setInterest(e.target.value)} // Update interest state
        />
        <span> %</span>
        <p>Loan Term:</p>
        <input
          type="number"
          id="years"
          placeholder="Enter your loan term"
          value={years} // Ensure the input reflects the current state
          onChange={(e) => setYears(e.target.value)} // Update years state
        />
        <span> years</span>
      </div>
      <div className="output">
        <button onClick={calculateEMI}>Calculate</button>
        <p>Your EMI: {emi}</p>
      </div>
    </div>
  );
}

export default App;
