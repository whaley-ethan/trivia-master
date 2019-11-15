const fetchQuestion = async (category, difficulty, amount) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  let response = await fetch(url)
  let data = await response.json()
  return data
}

export default {
  fetchQuestion: fetchQuestion
}