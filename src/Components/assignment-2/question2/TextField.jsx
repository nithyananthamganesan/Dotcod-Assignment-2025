import React, { useState } from 'react'

const TextField = () => {
    const[text,setText]= useState("");

  return (
    <div className='text-wrapper'>
        <div className="text">
            <label htmlFor="name">Text</label>
            <input onChange={(e)=>setText(e.target.value)} type="text" name='name' value={text}/>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default TextField
