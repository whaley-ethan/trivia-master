import React, { useState, useEffect } from 'react'
import dbAPI from '../api/dbAPI'
import AverageTime from '../components/AverageTime'
import MostFrequentCategory from '../components/MostFrequentCategory'

const Statistics = ({user}) => {
  const [quizes, setQuizes] = useState(null)
  const [answers, setAnswers] = useState(null)

  const categories = [
    "General Knowledge",
    "Entertainment: Books",
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Musicals & Theatres",
    "Entertainment: Television",
    "Entertainment: Video Games",
    "Entertainment: Board Games",
    "Science & Nature",
    "Science: Computers",
    "Science: Mathematics",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Art",
    "Celebrities",
    "Animals",
    "Vehicles",
    "Entertainment: Comics",
    "Science: Gadgets",
    "Entertainment: Japanese Anime & Manga",
    "Entertainment: Cartoon & Animations",
  ]

  const getUserData = async () => {
    const allQuizes = await dbAPI.getAllQuizes()
    const userQuizes = await allQuizes.filter(quiz => quiz.user===user.userID)
    const userQuizIDs = await userQuizes.map(quiz => quiz.id)
    const allAnswers = await dbAPI.getAllAnswers()
    const userAnswers = await allAnswers.filter(answer => userQuizIDs.includes(answer.quiz))
    setQuizes(userQuizes)
    setAnswers(userAnswers)
  }

  const showStatistics = () => {
    return (
    <>
    <MostFrequentCategory quizes={quizes} categories={categories}/>
    <br/>
    <AverageTime answers={answers} />
    </>
    )
  }

  useEffect(
    () => {
      if (user && !quizes) {
        getUserData()
      }
    }
  )


  return (
    <div>
      <h1>{user ? 'Statistics' : 'You must be logged in to see your statistics'}</h1>

      {quizes && showStatistics()}
    </div>
  )
}

export default Statistics