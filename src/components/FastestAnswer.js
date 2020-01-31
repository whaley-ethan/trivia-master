import React, {useState, useEffect } from 'react'
import dbAPI from '../api/dbAPI'

const FastestAnswer = ({ userStats }) => {
  const bestAnswer = userStats.own_five_fastest_right_answers[0] ? userStats.own_five_fastest_right_answers[0] : null 

  if (!userStats) {
    return <></>
  }
  return (
    <div>
      <h2>Fastest Answer:</h2>
      <h3>Category:</h3>
      <p>{bestAnswer && bestAnswer.category}</p>
      <h3>Time:</h3>
      <p>{bestAnswer && bestAnswer.time.toFixed(2)} seconds</p>
    </div>
  )
}

export default FastestAnswer