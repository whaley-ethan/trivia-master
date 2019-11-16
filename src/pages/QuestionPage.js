import React, { useState, useEffect } from 'react'

import api from '../api/triviaAPI'
import Question from '../components/Question/Question'
import QuestionButton from '../components/QuestionButton/QuestionButton'
import Answer from '../components/Answer/Answer'

const QuestionPage = (props) => {
  const [questions, setQuestions] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [startTime, setStartTime] = useState(null)
  const [score, setScore] = useState([])
  const [answered, setAnswered] = useState(false)
  const { amount, category, difficulty } = props.location.state

  const getQuestions = async (category, difficulty, amount) => {
    let response = await api.fetchQuestions(category, difficulty, amount)
    let questions = response.results
    setQuestions(questions)
    setCurrentQuestion(0)
    setStartTime(Date.now())
  }

  const nextQuestion = (lastQuestion) => {
    (currentQuestion === questions.length - 1) ? props.history.push('/') : setCurrentQuestion(currentQuestion + 1)
    setStartTime(Date.now())
    setAnswered(false)
  }

  const handleClick = (isRightAnswer) => {
    if (!answered) {
      const stopTime = Date.now()
      setAnswered(true)
      if (isRightAnswer) {
        setScore(score.concat({
          'category': questions[currentQuestion].category,
          'difficulty': questions[currentQuestion].difficulty,
          'time': stopTime-startTime,
          'didGetRight': true
        }))
      } else {
        setScore(score.concat({
          'category': questions[currentQuestion].category,
          'difficulty': questions[currentQuestion].difficulty,
          'time': stopTime-startTime,
          'didGetRight': false
        }))
      }
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
      {(questions && !answered) ? 
      <Question key={currentQuestion} handleClick={handleClick} quest={questions[currentQuestion]} /> :
      <Answer key={currentQuestion} answerInfo={score[currentQuestion]} />}

      {answered && <QuestionButton isLastQuestion={questions.length === currentQuestion + 1} handleClick={nextQuestion}/>}
    </div>
  )
}

export default QuestionPage
