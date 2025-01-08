// 1. How do you initialize multiple state variables using useState in a functional component?

import { useState } from "react"

const Question1 = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("Demo");
    const [active, setActive] = useState(false)
  return (
    <div>
        <div>
            <p>count: {count}</p> 
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
        <div>
            <label htmlFor="text">username</label>
            <input type="text" name="text" id="text" onChange={(e)=>setText(e.target.value)} value={text}/>
        </div>
        <div>
            <p>Active {active ? 'Yes':'No'}</p>
            <button onClick={()=>setActive(!active)}> Click </button>
        </div>
    </div>
  )
}

export default Question1
