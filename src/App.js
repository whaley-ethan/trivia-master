import React, { useState } from 'react'

import CategorySelector from './components/CategorySelector/CategorySelector'
import DifficultySelector from './components/DifficultySelector/DifficultySelector'
import Question from './components/Question/Question'
import api from './api/triviaAPI'

function App() {
  const [category, setCategory] = useState('9') // 9 is general knowledge
  const [difficulty, setDifficulty] = useState('easy')
  const [question, setQuestion] = useState(null)
  const [startTime, setStartTime] = useState(null)
  const [stopTime, setStopTime] = useState(null)

  const clearState = () => {
    setQuestion(null)
    setStartTime(null)
    setStopTime(null)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await api.fetchQuestion(category, difficulty)
    let quest = response.results[0]
    setStartTime(Date.now())
    setQuestion(<Question quest={quest} setStopTime={setStopTime} />)

  }

  return (
    <div>
      <h1>Welcome to Trivia Master</h1>
      {!question &&
        <>
          <h2>Select category and difficulty</h2>
          <form onSubmit={handleSubmit}>
            <CategorySelector category={category} setCategory={setCategory} />
            <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />
            <button>Submit</button>
          </form>
        </>}

      {question && <>{question}
        {stopTime && <>
          <h3>You answered correctly in {(stopTime - startTime) / 1000} seconds</h3>
          <button onClick={() => {
            clearState()
          }}>Another question</button>
        </>}
      </>
      }
    </div>
  )
}

export default App;
