import React from 'react'

const Greeting = ({greet=""}) => {
  return (
    <div>
      <h5>{greet?greet:"hello"}</h5>
    </div>
  )
}

export default Greeting
