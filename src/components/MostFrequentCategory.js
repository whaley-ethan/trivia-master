import React, {useState, useEffect } from 'react'
import dbAPI from '../api/dbAPI'

const MostFrequentCategory = ({user}) => {
  const [category, setCategory] = useState(null)

  const getUserData = async () => {
    const id = (user) ? user.userID : 1
    const allQuizes = await dbAPI.getAllQuizes()
    const userQuizes = await allQuizes.filter(quiz => quiz.user === id)
    const userQuizIDs = await userQuizes.map(quiz => quiz.id)
    const allAnswers = await dbAPI.getAllAnswers()
    const userAnswers = await allAnswers.filter(answer => userQuizIDs.includes(answer.quiz))
    return userAnswers

  }

  const fetchCategory = async () => {
    const userAnswers = await getUserData()
    let categoryFreq = {}
    for (const answer of userAnswers) {
      if (answer.category in categoryFreq) {
        categoryFreq[answer.category]++
      } else {
        categoryFreq[answer.category] = 1
      }
    }
    let categories = []
    for (const category in categoryFreq) {
      categories.push({'category': category, 'frequency': categoryFreq[category]})
    }
    categories.sort((a,b) => b.frequency-a.frequency)
    setCategory(categories[0].category)
  }

  useEffect(
    () => {
      if (!category && user) {
        fetchCategory()
      }
    }
  )
  if (!user) {
    return <></>
  }

  return (
    <div>
      <h2>Favorite Category:</h2>
      {category && <p>{category}</p>}
    </div>
  )
}

export default MostFrequentCategory