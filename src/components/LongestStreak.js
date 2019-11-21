import React, { useState, useEffect } from 'react'
import dbAPI from '../api/dbAPI'
const LongestStreak = (props) => {
  const [streak, setStreak] = useState(null)


  const getUserData = async () => {
    const id = (props.user) ? props.user.userID : 1
    const allQuizes = await dbAPI.getAllQuizes()
    const userQuizes = await allQuizes.filter(quiz => quiz.user === id)
    const userQuizIDs = await userQuizes.map(quiz => quiz.id)
    const allAnswers = await dbAPI.getAllAnswers()
    const userAnswers = await allAnswers.filter(answer => userQuizIDs.includes(answer.quiz))
    return userAnswers

  }

  const fetchStreak = async () => {
    let userAnswers = await getUserData()
    await userAnswers.sort((a, b) => b.quiz - a.quiz)
    let longestStreak = 0

    let currentIndex = 0
    let currentStreak = 0
    while (currentIndex < userAnswers.length) {
      if (!userAnswers[currentIndex].didGetRight) {
        currentStreak = 0
      } else {
        currentStreak++
      }
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak
      }
      currentIndex++
    }
    setStreak(longestStreak)

  }

  useEffect(
    () => {
      if (!streak) {
        fetchStreak()
      }
    }
  )

  if (!props.user) {
    return <></>
  }

  return (
    <div>
      <h2>Longest Streak:</h2>
      {streak && <p>{streak} questions in a row</p>}
    </div>
  )
}

export default LongestStreak