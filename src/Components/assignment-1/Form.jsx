import React, { useState } from 'react'

const Form = () => {
    const [name,setName] = useState();
    const [submitted, setSubmitted] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(name);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" onChange={(e)=>setName(e.target.value)} name="name" id="name" value={name} />
            <button type='submit'>Submit</button>
            {submitted && <p>{submitted}</p>}
        </form>        
    </div>
  )
}

export default Form
