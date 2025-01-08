// Q5. Create a component that applies a class name based on a boolean state. For example, apply the class "active" if the state is true, and "inactive" if false.
import React, { useState } from 'react'

const Question5 = () => {
    const [active, setActive] = useState(true);
    const styles = {
        active:{
            backgroundColor:"yellow",
            color:"black",
            fontWeight:"700",           

        },
        inactive:{}
    }

    const handleClick = () => {
        setActive((prevState)=>!prevState)
    }
  return (
    <div>
      <button onClick={handleClick}  style={active ? styles.active : styles.inactive}>{active?'active':'inactive'}</button>
    </div>
  )
}

export default Question5
