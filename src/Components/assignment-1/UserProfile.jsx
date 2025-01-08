import React from 'react'

const UserProfile = ({name}) => {
    const date = new Date();
  return (
    <div>
        <p>{date.getHours < 12 ? `Good Morning </br>${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` : `Good Evening ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</p>
      <h1>{name}</h1>
    </div>
  )
}

export default UserProfile
