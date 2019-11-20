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
    console.log(fastest)
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
      <h1>RecordsPage</h1>
      <h2>Fastest Answer:</h2>
      <h3>Category:</h3>
      <p>{fastest && fastest.category}</p>
      <h3>Time:</h3>
      <p>{fastest && fastest.time / 1000} seconds</p>
    </div>
  )
}

export default RecordsPage