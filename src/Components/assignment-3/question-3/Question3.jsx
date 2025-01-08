// 3. What is lazy initialization in useState, and when would you use it?

import { useState } from "react"

const Question3 = () => {
    const initializeState = ()=>{
        console.log("Heavy Computation hapening");
        return Array.from({length: 100}, (_,i)=> i+1)
        
    }
    // const [data, setData] = useState(initializeState()) //w/o lazy initialization
    const [data, setData] = useState(()=>initializeState()) //with lazy initialization

  return (
    <div>
        <p>3. What is lazy initialization in useState, and when would you use it?</p>
        <p>Data Length: {data}</p>
        <p>In this case: The large array (data) is computed only once during the initial render.Subsequent renders reuse the same state, improving performance.</p>
    </div>
  )
}

export default Question3
