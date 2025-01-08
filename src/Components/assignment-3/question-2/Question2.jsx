// 2. How can you update state based on its previous value in useState? Provide an example.

import { useState } from "react"

const Question2 = () => {
    const [name, setName] = useState("John");
    const [count, setCount] = useState(0);    
    const [items, setItems] = useState(["a", "b", "c"])    
    const [userObj, setUserObj] = useState({user:{name:'john', age:'21'}})

    const newItem = ["d","e","f"]

    const changeName = () => {
        setName((prevName)=>prevName+' doe')
    }

    const changeCount = () => {
        setCount((prevCount)=>prevCount+1);
    }
    
    const changeItem = () => {
        setItems((prevItem)=>[prevItem, newItem])
    }

    const changeUserObj = () => {
        setUserObj((prevUserObj)=>({
            ...prevUserObj,
            user:{
                ...prevUserObj.user,
                name:prevUserObj.user.name+' doe'
            }
        }))
    }
  return (
    <div>
        {/* <div>
            <p>Name: {name}</p>
            <button type="button" onClick={changeName}>Change Name</button>
        </div>
        <div>
            <p>Count: {count}</p>
            <button type="button" onClick={changeCount}>Change Count</button>
        </div> */}
        {/* <div>
            <p>State: {active.toString()}</p>
            <button type="button" onClick={changeActive}>Change State</button>
        </div> */}
        <p>2. How can you update state based on its previous value in useState? Provide an example.</p>
        <div>
            <p>Items: {items}</p>
            <button type="button" onClick={changeItem}>Change Array</button>
        </div>

        <div>
            <p>User Nested: {userObj.user.name}</p>
            <button type="button" onClick={changeUserObj}>Change User</button>
        </div>



    </div>
  )
}

export default Question2

/* some more examples for reference

//Nested array type
const [matrix, setMatrix] = useState([[1, 2], [3, 4]]);

setMatrix((prevState) =>
  prevState.map((row, i) =>
    i === 0 ? row.map((val) => val + 1) : row
  )
);

//Functional Type
const [compute, setCompute] = useState(() => () => 0);

setCompute((prevCompute) => () => prevCompute() + 1);

//Null type
const [value, setValue] = useState(null);

setValue((prevValue) => prevValue ? prevValue : "Default Value");


**/