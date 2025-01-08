// Q3. Write a component that uses useEffect to log "Component mounted" to the console when the component is first rendered.
import React, { useEffect } from 'react'

const Question3 = () => {
    useEffect(()=>{
        console.log("Component mounted");     
        return(()=>{
            console.log("component unmounted");
            
        })   
    },[])
  return (
    <div>
      <h1>Component mounted</h1>
      {console.log("after use effect")}
    </div>
  )
}

export default Question3
