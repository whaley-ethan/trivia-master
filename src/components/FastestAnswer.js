import React, {useState, useEffect } from 'react'
import dbAPI from '../api/dbAPI'

const FastestAnswer = (props) => {
  const [fastest, setFastest] = useState(null)

  const getUserData = async () => {
    const id = (props.user) ? props.user.userID : 4
    const allQuizes = await dbAPI.getAllQuizes()
    const userQuizes = await allQuizes.filter(quiz => quiz.user === id)
    const userQuizIDs = await userQuizes.map(quiz => quiz.id)
    const allAnswers = await dbAPI.getAllAnswers()
    const userAnswers = await allAnswers.filter(answer => userQuizIDs.includes(answer.quiz))
    return userAnswers

  }

  const getFastestRightAnswer = async () => {
    let answers = await getUserData()
    await answers.sort((a,b) => a.time-b.time )
    let found = false
    let i = 0
    while(!found){
      found = answers[i].didGetRight
      if (!found){
        i++
      }
    }

    setFastest(answers[i])
  }

  useEffect(
    () => {
      if (!fastest) {
        getFastestRightAnswer()
        
      }
    }
  )


  if (!props.user) {
    return <></>
  }
  return (
    <div>
      <h2>Fastest Answer:</h2>
      <h3>Category:</h3>
      <p>{fastest && fastest.category}</p>
      <h3>Time:</h3>
      <p>{fastest && Number((fastest.time / 1000).toFixed(2))} seconds</p>
    </div>
  )
}

export default FastestAnswer