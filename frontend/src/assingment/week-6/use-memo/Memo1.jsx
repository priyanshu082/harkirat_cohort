import React, { useMemo, useState } from 'react'

// This component demonstrates the use of useMemo to optimize expensive calculations (factorial in this case).
// The factorial is only recalculated when the input changes, preventing unnecessary recalculations on every render.

const Memo1 = () => {
  const [input, setInput] = useState(0)

  // Handles input change and updates the state with the numeric value
  const handleInput = (e) => {
    setInput(Number(e.target.value))
  }

  // useMemo memoizes the result of the factorial calculation.
  // The calculation only runs again if 'input' changes.
  const factorialCalculator = useMemo(function () {
    let ans = 1;
    for (let i = 1; i <= input; i++) {
      ans *= i;
    }
    return ans;
  }, [input])

  return (
    <div>
      <input type='number' onChange={handleInput} />
      <br />
      <div>
        Factorial of {input} : {factorialCalculator}
      </div>
    </div>
  )
}

export default Memo1