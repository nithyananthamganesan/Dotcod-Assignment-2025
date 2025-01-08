// Q4. Create a component with a button that has inline styles applied to change its background color and text color.
import React, { useState } from 'react'

const Question4 = () => {
    const [isClicked, setIsClicked]=useState(false);
    const styleButton = {
        button:{
            backgroundColor:"red",
            color:"white",
            padding:"10px",
            margin:"10px"
        }
    }
    const handleClick = () =>{
        setIsClicked((prevState)=>!prevState)
    }
  return (
    <div>
      <button style={{ backgroundColor:"red",
            color:"white",
            padding:"10px",
            margin:"10px",cursor:"pointer"}}>click me</button>
      <button onClick={handleClick} style={isClicked ? styleButton.button : undefined }>{isClicked ? 'clicked':'click me'}</button>
    </div>
  )
}

export default Question4
