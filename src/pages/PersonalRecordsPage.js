import React from 'react'
import LongestStreak from '../components/LongestStreak'
import FastestAnswer from '../components/FastestAnswer'
import BestCategory from '../components/BestCategory'

function PersonalRecordsPage(props) {
  return (
    <div>
      <h1>{props.user ? 'PersonalRecords': 'You must be logged in to see your records'}</h1>
      <LongestStreak user={props.user}/>
      <FastestAnswer user={props.user}/>
      <BestCategory user={props.user}/>
      
    </div>
  )
}

export default PersonalRecordsPage