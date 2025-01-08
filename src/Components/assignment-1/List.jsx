import React from 'react'

const List = () => {
    const data = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
      { data.map((item)=>(
        <ul>
            
            <span>
                 {`item ${item}`}
            </span>
            
        </ul>
      )) 
        }
    </div>
  )
}

export default List
