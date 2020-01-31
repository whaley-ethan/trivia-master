import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import dbAPI from './api/dbAPI'
import HomePage from './pages/HomePage'
import QuestionPage from './pages/QuestionPage'
import LoginPage from './pages/LoginPage'
import RecordsPage from './pages/RecordsPage'
import PersonalRecordsPage from './pages/PersonalRecordsPage'
import StatisticsPage from './pages/StatisticsPage'
import NavBar from './components/NavBar/NavBar'
import RegistrationPage from './pages/RegistrationPage'
import RandomQuote from './components/RandomQuote'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    let newUser = null
    
    const fetchUser = async (authToken) => {
      newUser = await dbAPI.getUser(authToken)
      setUser(newUser)
    }
    if (window.localStorage.getItem('authToken') !== null && user == null) {
      newUser = fetchUser(window.localStorage.getItem('authToken'))
    }
   
    console.log(user)
  }, [user])

  return (
    <div className = "text-white">
      <Router>
        <div>
          <NavBar user={user} setUser={setUser}/>
          <hr/>
          <Route exact path='/' render={(props) => <LoginPage {...props} setUser={setUser} />} />
          
          <Route exact path='/home' render={(props) => <HomePage {...props} user={user} />} />
          
          <Route path='/quiz' render={(props) => <QuestionPage {...props} user={user} />} />

          <Route path='/global_records' component={RecordsPage} />

          <Route path='/personal_records' render={(props) => <PersonalRecordsPage {...props} user={user} />} />

          <Route path='/statistics' render={(props) => <StatisticsPage {...props} user={user} />} />

          <Route path='/register' render={(props) => <RegistrationPage {...props} setUser={setUser} />} />
          <hr/>
          <RandomQuote />
        </div>
      </Router>
    </div>
  )
}

export default App;
