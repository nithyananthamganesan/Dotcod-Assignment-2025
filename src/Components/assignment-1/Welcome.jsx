import React from 'react'
import Counter from './Counter'

const Welcome = ({favoriteColor}) => {
  return (
    <div>
      <h1>Welcome to react</h1>
      <h3 style={{color:`${favoriteColor}`}}>My Favourite color is {favoriteColor}</h3>
      <Counter />
    </div>
  )
}

export default Welcome
