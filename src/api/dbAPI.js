import { getQueriesForElement } from "@testing-library/react"

const url = `http://localhost:8000/api/`

const login = async (loginObject) => {
  let response = await fetch(`${url}rest-auth/login/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(loginObject)
  })
  let token = await response.json()

  // TODO: add in validation of login here

  const authToken = `Token ${token.key}`
  window.localStorage.setItem('authToken', authToken)
  let user = getUser(authToken)
  return user
}

const getUser = async (authToken) => {
  let response = await fetch(`${url}rest-auth/user/`, {
    method: 'GET',
    withCredentials: true,
    credentials: 'include',
    headers: {
      'Authorization': authToken
    }
  })
  let user = await response.json()
  return user
}

const createUser = async (userObject) => {

  let response = await fetch(`${url}rest-auth/registration/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(userObject)
  })
  let data = await response.json()
  console.log(data)
  return data
}

const createQuiz = async (authToken) => {

  let response = await fetch(`${url}quiz/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    withCredentials: true,
    credentials: 'include',
    headers: {
      'Authorization': authToken
    }
  })
  let data = await response.json()
  return data
}

const createAnswer = async (answerInfo) => {

  let response = await fetch(`${url}answer/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(answerInfo)
  })
  let data = await response.json()
  return data
}

const getAllQuizes = async () => {
  let response = await fetch(`${url}quiz/`)
  let quizes = await response.json()
  return quizes
}

const getAllAnswers = async () => {
  let response = await fetch(`${url}answer/`)
  let answers = await response.json()
  return answers
}

const logout = async () => {
  let response = await fetch(`${url}rest-auth/logout/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
  })
  let data = await response.json()
  console.log(data)
  return data
}

export default {
  logout: logout,
  login: login,
  getUser: getUser,
  createUser: createUser,
  createQuiz: createQuiz,
  createAnswer: createAnswer,
  getAllAnswers: getAllAnswers,
  getAllQuizes: getAllQuizes,
}