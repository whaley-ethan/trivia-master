import React from 'react'

const Question = ({ quest, handleClick}) => {

  const decodeHTML = (html) => {
    let txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
  const possibleAnswers = () => {

    //Use Fisher–Yates shuffle algorithm to shuffle in place
    const shuffle = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    let answers = []
    answers.push(<button onClick={() => handleClick(true)}>{decodeHTML(quest.correct_answer)}</button>)
    for (let ans of quest.incorrect_answers){
    answers.push(<button onClick={() => handleClick(false)}>{decodeHTML(ans)}</button>)
    }
    shuffle(answers)
    return answers

  }
  return (
    <div>
      <h2>A{quest.difficulty === 'easy' && 'n'} {quest.difficulty} question in the category of {quest.category}</h2>
      <h3>{decodeHTML(quest.question)}</h3>
        {possibleAnswers()}
    </div>
  )
}

export default Question
