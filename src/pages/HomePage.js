import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Badge} from 'reactstrap'
import AmountSelector from '../components/AmountSelector/AmountSelector'
import CategorySelector from '../components/CategorySelector/CategorySelector'
import DifficultySelector from '../components/DifficultySelector/DifficultySelector'

const HomePage = (props) => {
  const [category, setCategory] = useState('9') // 9 is general knowledge
  const [difficulty, setDifficulty] = useState('easy')
  const [amount, setAmount] = useState(1)

  return (
    <>
      <h1><Badge color="secondary">Welcome to Trivia Master</Badge></h1>

      <h3>Select category, difficulty, and length of quiz (max 10 questions)</h3>
      <form>
        <CategorySelector category={category} setCategory={setCategory} />
        <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />
        <AmountSelector amount={amount} setAmount={setAmount} />
        <br/><br/>
        <Link to={{
          pathname: '/quiz',
          state: {
            category: category,
            difficulty: difficulty,
            amount: amount,
          }
        }}>Submit</Link>
      </form>

    </>
  )
}

export default HomePage
