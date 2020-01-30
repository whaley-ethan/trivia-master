import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import api from '../api/triviaAPI'
import dbAPI from '../api/dbAPI'
import Question from '../components/Question/Question'
import QuestionButton from '../components/QuestionButton/QuestionButton'
import Answer from '../components/Answer/Answer'

const QuestionPage = (props) => {
  const [questions, setQuestions] = useState(null)
  const [quiz, setQuiz] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [startTime, setStartTime] = useState(null)
  const [score, setScore] = useState([])
  const [answered, setAnswered] = useState(false)
  const tempuser = props.user && props.user
  const [user, setUser] = useState(tempuser)
  const { amount, category, difficulty } = (props.location.state ? props.location.state : {amount: null, category: null, difficulty: null})

  const getQuestions = async (category, difficulty, amount) => {
    const newQuiz = await dbAPI.createQuiz((user) ? window.localStorage.getItem('authToken'): 1)
    setQuiz(newQuiz.id)
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

  const handleClick = async (isRightAnswer) => {
    if (!answered) {
      const stopTime = Date.now()
      setAnswered(true)
      let newScore = {}
      if (isRightAnswer) {
        newScore = {
          "quiz": quiz,
          "category": questions[currentQuestion].category,
          "difficulty": questions[currentQuestion].difficulty,
          "didGetRight": true,
          "time": stopTime - startTime
        }
      } else {
        newScore = {
          "quiz": quiz,
          "category": questions[currentQuestion].category,
          "difficulty": questions[currentQuestion].difficulty,
          "didGetRight": false,
          "time": stopTime - startTime
        }
        
      }
      let response = await dbAPI.createAnswer(newScore)
      setScore(score.concat(newScore))
    }
  }

  useEffect(() => {
    if (!questions && !quiz) {
      getQuestions(category, difficulty, amount)

    }
  }
  )
  if (user) {
    return (
      <div>
        {(questions && !answered) ?
          <Question key={currentQuestion} handleClick={handleClick} quest={questions[currentQuestion]} /> :
          <Answer key={currentQuestion} answerInfo={score[currentQuestion]} />}

        {answered && <QuestionButton isLastQuestion={questions.length === currentQuestion + 1} handleClick={nextQuestion} />}
      </div>
    )
  } else {
    return(
      < Redirect to='/' />
    )
  }
}

export default QuestionPage
