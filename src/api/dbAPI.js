const url = `https://trivia-master-backend.herokuapp.com/api/`

const login = async (loginObject) => {
  let response = await fetch(`${url}rest-auth/login/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(loginObject)
  })
  let key = await response.json()
  
  let response2 = await fetch(`${url}users/`)
  let users = await response2.json()
  for (let user of users) {
    if (user.username === loginObject.username) {
      key['userID'] = user['id']
    }
  } 
  return key
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
  return data
}

const createQuiz = async (userID) => {

  let response = await fetch(`${url}quiz/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({"user": userID,
  "answers": []})
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

export default {
  login: login,
  createUser: createUser,
  createQuiz: createQuiz,
  createAnswer: createAnswer,
  getAllAnswers: getAllAnswers,
  getAllQuizes: getAllQuizes,
}