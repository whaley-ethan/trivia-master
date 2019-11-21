import React, { useState, useEffect } from 'react'
import dbAPI from '../api/dbAPI'

function RecordsPage() {
  const [fastest, setFastest] = useState(null)

  const getAllAnswers = async () => {
    let answers = await dbAPI.getAllAnswers()
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
        getAllAnswers()
        
      }
    }
  )
  return (
    <div>

      <h1>Fastest correct answer:</h1>
      <h3>Category:</h3>
      <p>{fastest && fastest.category}</p>
      <h3>Time:</h3>
      <p>{fastest && Number((fastest.time / 1000).toFixed(2))} seconds</p>
    </div>
  )
}

export default RecordsPage