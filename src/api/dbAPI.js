const login = async (loginObject) => {
  const url = `http://127.0.0.1:8000/api/rest-auth/`
  let response = await fetch(`${url}login/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(loginObject)
  })
  console.log(response)
  let key = await response.json()
  return key
}

const createUser = async (userObject) => {
  const url = `http://127.0.0.1:8000/api/rest-auth/`
  let response = await fetch(`${url}registration/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(userObject)
  })
  console.log(response)
  let data = await response.json()
  console.log(data)
  return data
}



export default {
  login: login,
  createUser: createUser
}