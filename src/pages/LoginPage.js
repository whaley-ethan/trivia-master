import React, { useState } from 'react'
import dbAPI from '../api/dbAPI'

const LoginPage = ({ history, setUser }) => {

  const register = () => {
    history.push('/register')
  }

  const login = async (event) => {
    event.preventDefault()
    const loginInfo = {
      "username": event.target.username.value,
      "password": event.target.password.value
    }
    const user = await dbAPI.login(loginInfo)
    console.log(user)
    setUser(user)

  }
  return (
    <><h1>You must login to play</h1>

      <form onSubmit={(e) => login(e)}>
        Username:
        <input type="text" id="username" name="username" /><br/>
        Password:
        <input type="password" id="pass" name="password" /><br/>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => register()}>Register</button>
    </>
  )
}

export default LoginPage