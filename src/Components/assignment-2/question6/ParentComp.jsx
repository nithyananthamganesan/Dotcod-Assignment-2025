import React from 'react'
import ChildComp from './ChildComp'

const ParentComp = () => {
    const handleClick = () => {
        alert("clicked");
    }
  return (
    <div>
      <ChildComp handleClick={handleClick} />
    </div>
  )
}

export default ParentComp
