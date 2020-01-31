import React, { useEffect, useState } from 'react'
import LongestStreak from '../components/LongestStreak'
import FastestAnswer from '../components/FastestAnswer'
import BestCategory from '../components/BestCategory'
import dbAPI from '../api/dbAPI'

const PersonalRecordsPage = ({ user }) => {
  const [userStats, setUserStats] = useState(null)

  useEffect(async () => {
    let stats = null

    const fetchStats = async () => {
      stats = await dbAPI.getUserStats(user ? user.pk : 1)
      setUserStats(stats)
    }
    if (!userStats) {
      fetchStats()
    }

  }, [userStats])
  return (
    <div>
      <h1>{user ? 'Personal Records' : 'You must be logged in to see your records'}</h1>
      {userStats ? <>
        <LongestStreak user={userStats} />
        <FastestAnswer user={userStats} />
        <BestCategory user={userStats} />
      </> : <></>}

    </div>
  )
}

export default PersonalRecordsPage