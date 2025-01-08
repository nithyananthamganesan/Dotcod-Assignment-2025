// 6. What happens if you call setState multiple times in a single event handler? How does React handle this?

import { useState } from "react"

const Question6 = () => {
    const [count, setCount] = useState(0);

    const handleClick=()=>{
        setCount((prevCount)=>prevCount+1)
        setCount((prevCount)=>prevCount+1)
        setCount((prevCount)=>prevCount+1)
        setCount((prevCount)=>prevCount+1)
    }
  return (
    <div>
        <p>6. What happens if you call setState multiple times in a single event handler? How does React handle this?</p>

      <p>{count}</p>
      <button onClick={handleClick}>Click Handle</button>
      <p>React batches the three setCount calls into a single re-render. Since the functional updater is used, the prevCount argument is incremented correctly for each call.</p>
    </div>
  )
}

export default Question6
