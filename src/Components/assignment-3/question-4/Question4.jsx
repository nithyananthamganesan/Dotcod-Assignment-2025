// 4. How do you handle updating a specific property of an object stored in useState?

import { useState } from "react"

const Question4 = () => {
    const [user, setUser] = useState({name:'john', age:'21'})

    const changeUser = () => {
        setUser((prevUser)=>({
            ...prevUser,
            age:parseInt(prevUser.age) + 1
        }))
    }

  return (
    <div>
        <p>4. How do you handle updating a specific property of an object stored in useState?</p>
        <div>
            <p>User name: {user.name}</p>
            <p>User age: {user.age}</p>
            <button type="button" onClick={changeUser}>Change Age</button>
        </div>
    </div>
  )
}

export default Question4
