import React from 'react'
import Welcome from './Welcome';
import UserProfile from './UserProfile';
import Form from './Form';

const Assignment1 = () => {
  return (
    <div>
      <Welcome favoriteColor="green"/>
      <UserProfile name="Siddharth Abimanyu"/>
      {/* <List /> */}
      <Form />
    </div>
  )
}

export default Assignment1;
