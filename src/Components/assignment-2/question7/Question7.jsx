// Q7. Create a component that accepts a greeting prop and uses "Hello" as the default value if no greeting is provided. 
import React from 'react'
import Greeting from './Greeting'

const Question7 = () => {
  return (
    <div>
      <Greeting greet={""}/>
    </div>
  )
}

export default Question7
