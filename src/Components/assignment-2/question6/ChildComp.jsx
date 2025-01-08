import React from 'react'

const ChildComp = ({handleClick}) => {
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default ChildComp
