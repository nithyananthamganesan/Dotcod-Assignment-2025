// 5. How can you manage an array in useState, such as adding, updating, or deleting elements?

import { useState } from "react"

const Question5 = () => {
    const data = [
        {
            id:1,name:"Item 1"
        },
        {
            id:2,name:"Item 2"
        },
    ]
    const [items, setItems] = useState(data);

    const addItem = () => {
        setItems((prevState)=>[
            ...prevState,{id: parseInt(prevState.length+1),name:`Item ${prevState.length + 1}`}
        ])
    }

    const updateItem = (id, newName) => {
        setItems((prevState)=>
            prevState.map((item)=>(
                item.id == id ? {...item, name: newName} : item
            ))
        )
    }

    const deleteItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
    // const deleteItem = (id) => {
    //     setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    //   };

    const clearItem = () => {
        setItems([])
    }

  return (
    <div>
        <p>5. How can you manage an array in useState, such as adding, updating, or deleting elements?</p>

        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <p>{item.name}</p>
                    <button onClick={()=>updateItem(item.id, `updated ${item.name}`)}>Edit</button>
                    <button onClick={()=>deleteItem(item.id)}>Delete</button>
                </li>
            )
            )}
        </ul>
        <button onClick={addItem}>Add</button>
        <button onClick={clearItem}>Clear</button>
    </div>
  )
}

export default Question5
