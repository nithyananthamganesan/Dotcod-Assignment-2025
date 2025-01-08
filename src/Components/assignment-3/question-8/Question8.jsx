// 8. Can you store a function in useState, and what would be a practical use case for doing so?

import { useState } from "react"

const Question8 = () => {

    const handleSubmitOne = () => {
        alert('submit one handeled');
    }
    const handleSubmitTwo = () => {
        alert('submit two handled')
    }

    const [formData, setFormData] = useState({name:"", email:""});
    const [submitHandler, setSubmitHandler] = useState(()=>handleSubmitOne);

    const toggleHandler = () => {
        setSubmitHandler((prevHandler) =>
          prevHandler === handleSubmitOne ? handleSubmitTwo : handleSubmitOne
        );
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
  return (
    <div>
        <p>8. Can you store a function in useState, and what would be a practical use case for doing so?</p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={formData.name} placeholder="Name" name="name" onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={formData.email} placeholder="Email" name="email" onChange={handleChange}/>
        <button onClick={submitHandler}>Submit</button>
        <button onClick={toggleHandler}>Toggle</button>
    </div>
  )
}

export default Question8
