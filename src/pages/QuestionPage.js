
import React, { useState, useEffect } from 'react'

import api from '../api/triviaAPI'
import Question from '../components/Question/Question'

const QuestionPage = (props) => {
  const [questions, setQuestions] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [startTime, setStartTime] = useState(null)
  const [stopTime, setStopTime] = useState(null)
  const [answered, setAnswered] = useState(false)

  const { amount, category, difficulty } = props.location.state

  const getQuestions = async (category, difficulty, amount) => {
    let response = await api.fetchQuestion(category, difficulty, amount)
    let questions = response.results
    setQuestions(questions)
    setCurrentQuestion(0)
    setStartTime(Date.now())
  }

  const nextQuestion = async () => {
    (currentQuestion === questions.length - 1) ? setCurrentQuestion(currentQuestion) : setCurrentQuestion(currentQuestion + 1)
    setAnswered(false)
    setStopTime(null)
    setStartTime(Date.now())

  }

  const handleClick = (isRightAnswer) => {
    if (isRightAnswer) {
      alert('right')
      setStopTime(Date.now())
      setAnswered(true)
    } else {
      alert('wrong')
    }
    
  }

  useEffect(() => {
    if (!questions) {
      getQuestions(category, difficulty, amount)
    }
  }
  )

  return (
    <div>
      <h2>Question Page</h2>
      {questions && <Question key={currentQuestion} handleClick={handleClick} quest={questions[currentQuestion]}/>}
  {answered && <><p>You answered in {(stopTime-startTime) / 1000} seconds</p>
  <button onClick={() => nextQuestion()}>Next Question</button></>}
    </div>
  )
}

export default QuestionPage
