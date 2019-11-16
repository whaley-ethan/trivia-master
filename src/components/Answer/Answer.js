import React from 'react'
// todo:
//    make this redirect to another page for the last answer, showing statistics
function Answer({ answerInfo }) {

  return (
    <>{answerInfo && <h2>
      You answered a{answerInfo.difficulty === 'easy' && 'n'} {answerInfo.difficulty} question in the category of {answerInfo.category} {!answerInfo.didGetRight && 'in'}correctly in {answerInfo.time / 1000} seconds
    </h2>}</>
  )
}

export default Answer