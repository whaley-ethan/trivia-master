import React, { useState, useEffect } from 'react'
import dbAPI from '../api/dbAPI'
import { get } from 'http'
const AverageTime = ({user}) => {
  const[rightTime, setRightTime] = useState(null)
  const[wrongTime, setWrongTime] = useState(null)
  
  const getUserData = async () => {
    const id = (user) ? user.userID : 1
    const allQuizes = await dbAPI.getAllQuizes()
    const userQuizes = await allQuizes.filter(quiz => quiz.user === id)
    const userQuizIDs = await userQuizes.map(quiz => quiz.id)
    const allAnswers = await dbAPI.getAllAnswers()
    const userAnswers = await allAnswers.filter(answer => userQuizIDs.includes(answer.quiz))
    return userAnswers

  }

  const fetchAveTime = async () => {
    const userAnswers = await getUserData()
    let rightAnswerCount = 0
    let rightAnswerTime = 0
    let wrongAnswerCount = 0
    let wrongAnswerTime = 0
    for (const answer of userAnswers) {
      if (answer.didGetRight) {
        rightAnswerCount++
        rightAnswerTime += answer.time
      } else {
        wrongAnswerCount++
        wrongAnswerTime += answer.time
      }
    }

    setRightTime(rightAnswerTime / (1000 * rightAnswerCount))
    setWrongTime(wrongAnswerTime / (1000 * wrongAnswerCount))
    
  }
  useEffect(
    () => {
      if (user && !rightTime){
        fetchAveTime()
      }
    }
  )

  if (!user) {
    return <></>
  }

  return (
    <div>
      <h2>Right Answer Average:</h2>
  <p>{rightTime && Number((rightTime).toFixed(2))} seconds</p>
      <h2>Wrong Answer Average:</h2>
  <p>{wrongTime && Number((wrongTime).toFixed(2))} seconds</p>
    </div>
  )
}

export default AverageTime