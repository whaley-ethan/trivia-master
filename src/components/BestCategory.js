import React, { useState, useEffect} from 'react'
import categories from '../config/categories.json'
import dbAPI from '../api/dbAPI'

const BestCategory = (props) => {
  const [bestCategory, setBestCategory] = useState(null)

  const getUserData = async () => {
    const id = (props.user) ? props.user.userID : 1
    const allQuizes = await dbAPI.getAllQuizes()
    const userQuizes = await allQuizes.filter(quiz => quiz.user === id)
    const userQuizIDs = await userQuizes.map(quiz => quiz.id)
    const allAnswers = await dbAPI.getAllAnswers()
    const userAnswers = await allAnswers.filter(answer => userQuizIDs.includes(answer.quiz))
    return userAnswers

  }


  const fetchBestCategory = async () => {
    const userAnswers = await getUserData()
    let categoryTF = {}
    for (const answer of userAnswers) {
      if (answer.category in categoryTF) {
        answer.didGetRight ?
          categoryTF[answer.category]['right']++ :
          categoryTF[answer.category]['wrong']++
      } else {
        categoryTF[answer.category] = (answer.didGetRight) ?
          { 'right': 1, 'wrong': 0 } : { 'right': 0, 'wrong': 1 }
      }
    }
    let percentages = []
    for (const category in categoryTF) {
      percentages.push({ 'category': category, 'percentage': (categoryTF[category].right * 100 / (categoryTF[category].right + categoryTF[category].wrong)) })
    }

    percentages.sort((a,b) => b.percentage - a.percentage)
    setBestCategory(percentages[0])

  }

  useEffect(
    () => {
      if (!bestCategory) {
        fetchBestCategory()
      }
    }
  )

  if (!props.user) {
    return <></>
  }

  return (
    <div>
      <h2>Best Category:</h2>
      {bestCategory &&
        <>
          <h3>{bestCategory.category}</h3>
          <h4>{Number((bestCategory.percentage).toFixed(2))}% of questions answered correctly</h4>

        </>
      }
    </div>
  )

}

export default BestCategory