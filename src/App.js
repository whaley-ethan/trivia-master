import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import QuestionPage from './pages/QuestionPage'
import LoginPage from './pages/LoginPage'
import RecordsPage from './pages/RecordsPage'
import PersonalRecordsPage from './pages/PersonalRecordsPage'
import StatisticsPage from './pages/StatisticsPage'
import NavBar from './components/NavBar/NavBar'
import RegistrationPage from './pages/RegistrationPage'

function App() {
  const [user, setUser] = useState(null)

  const componentOrLogin = (Component) => {
    if (user){
      return (props) => <Component {...props} user={user} />
    } else {
      return (props) => <LoginPage {...props} setUser={setUser} />
    }
  }
  return (
    <div>
      <Router>
        <div>
          <NavBar user={user}/>
          <hr/>
          <Route exact path='/' render={componentOrLogin(HomePage)} />

          <Route path='/quiz' render={(props) => <QuestionPage {...props} user={user} />} />

          <Route path='/global_records' component={RecordsPage} />

          <Route path='/personal_records' render={(props) => <PersonalRecordsPage {...props} user={user} />} />

          <Route path='/statistics' render={(props) => <StatisticsPage {...props} user={user} />} />

          <Route path='/register' render={(props) => <RegistrationPage {...props} setUser={setUser} />} />
          
        </div>
      </Router>
    </div>
  )
}

export default App;
