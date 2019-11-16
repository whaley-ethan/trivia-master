import React from 'react'

const QuestionButton = ({ isLastQuestion, handleClick}) => {
  return (
    <><button onClick={() => handleClick()}>{isLastQuestion ? <>New Game</> : <>Next Question</>}</button></> 
  )

}

export default QuestionButton