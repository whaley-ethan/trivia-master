import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AmountSelector from '../components/AmountSelector/AmountSelector'
import CategorySelector from '../components/CategorySelector/CategorySelector'
import DifficultySelector from '../components/DifficultySelector/DifficultySelector'
import api from '../api/triviaAPI'

const HomePage = ({ history }) => {
  const [category, setCategory] = useState('9') // 9 is general knowledge
  const [difficulty, setDifficulty] = useState('easy')
  const [amount, setAmount] = useState(1)

  const handleSubmit = () => {

  }


  return (
    <>
      <h1>Welcome to Trivia Master</h1>

      <h2>Select category and difficulty</h2>
      <form onSubmit={handleSubmit}>
        <CategorySelector category={category} setCategory={setCategory} />
        <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />
        <AmountSelector amount={amount} setAmount={setAmount} />
        <Link to={{
          pathname: '/quiz',
          state: {
            category: category,
            difficulty: difficulty,
            amount: amount
          }
        }}>Submit</Link>
      </form>

    </>
  )
}

export default HomePage
