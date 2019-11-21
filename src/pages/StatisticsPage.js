import React from 'react'
import AverageTime from '../components/AverageTime'
import MostFrequentCategory from '../components/MostFrequentCategory'

const Statistics = ({user}) => {

  const showStatistics = () => {
    return (
    <>
    <MostFrequentCategory user={user}/>
    <br/>
    <AverageTime user={user} />
    </>
    )
  }


  return (
    <div>
      <h1>{user ? 'Statistics' : 'You must be logged in to see your statistics'}</h1>

      {showStatistics()}
    </div>
  )
}

export default Statistics