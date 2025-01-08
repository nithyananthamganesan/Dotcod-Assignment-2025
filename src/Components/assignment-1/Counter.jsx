import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () =>{
        // count++;
        setCount(count+1);
    }
    const decrement = () =>{
        // count--;
        setCount(count-1);
    }
    const handleClick = () => alert('Button Clicked')
  return (
    <div>
        <button onClick={decrement}>-</button>
        <span> {count < 0 ? setCount(0) : count} </span>
        <button onClick={increment}>+</button>
        <div>
        <button onClick={handleClick}>Click Me</button>
        </div>
    </div>
  )
}

export default Counter
