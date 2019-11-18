const login = async (loginObject) => {
  const url = `http://127.0.0.1:8000/api/rest-auth/login/`
  let response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(loginObject)
  })
  let data = await response.json()
  return data
}

const getUserID = async (userKey) => {
  const url = `http://127.0.0.1:8000/api/rest-auth/login/`
  let response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(userKey)
  })
  let data = await response.json()
  return data
}

export default {
  login: login,
  getUserID: getUserID,
}

// const addWine = (wineObject) => {
//   return fetch('https://cors-anywhere.herokuapp.com/https://wineapi-cp.herokuapp.com/wines/', {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     method: 'POST',
//     body: JSON.stringify(wineObject)
//   })
// }
