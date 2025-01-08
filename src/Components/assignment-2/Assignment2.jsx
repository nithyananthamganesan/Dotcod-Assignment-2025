import React from 'react'
import Layout from './question1/Layout'
import TextField from './question2/TextField'
import Question3 from './question3/Question3'
import Question4 from './question4/Question4'
import Question5 from './question5/Question5'
import Question6 from './question6/Question6'
import Question7 from './question7/Question7'

const Assignment2 = () => {
  return (
    <div>
      <div>q1<Layout/></div>
      <div>q2<TextField/></div>
      <div>q3<Question3/></div>
      <div>q4<Question4/></div>
      <div>q5<Question5/></div>
      <div>q6<Question6/></div>
      <div>q7<Question7/></div>
    </div>
  )
}

export default Assignment2
