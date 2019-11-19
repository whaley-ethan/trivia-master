import React, { useState }from 'react'
import { Redirect } from 'react-router-dom'
import dbAPI from '../api/dbAPI'

const RegistrationPage = (props) => {
  const [redirect, setRedirect] = useState(false)
  const login = async (e) => {
    e.preventDefault()
    let form = e.target
    let userData = {
      username: form.username.value,
      email: form.email.value,
      password1: form.pass1.value,
      password2: form.pass2.value,
    }
    let response = await dbAPI.createUser(userData)
    setRedirect(true)
    
    
  }
  return (
    <>
    
    <h1>Thanks for Registering</h1>
      {redirect && <Redirect to='/' />}
      <form onSubmit={(e) => login(e)}>
        Username:
        <input type="text" id="username" name="username" /><br/>
        Email (optional):
        <input type="text" id="email" name="email" /><br/>
        Password:
        <input type="password" id="pass1" name="password1" /><br/>
        Type password again:
        <input type="password" id="pass2" name="password2" /><br/>
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default RegistrationPage