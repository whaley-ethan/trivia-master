import React, { useState, useEffect} from 'react'
import categories from '../config/categories.json'
import dbAPI from '../api/dbAPI'

const BestCategory = ({ userStats }) => {
  const bestCategory = userStats.five_best_categories[0] ? userStats.five_best_categories[0] : null

  if (!userStats) {
    return <></>
  }

  return (
    <div>
      <h2>Best Category:</h2>
      {bestCategory &&
        <>
          <h3>{bestCategory.category}</h3>
          <h4>{bestCategory.percent_right}% of questions answered correctly</h4>

        </>
      }
    </div>
  )

}

export default BestCategory