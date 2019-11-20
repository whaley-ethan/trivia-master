const fetchQuestions = async (category, difficulty, amount) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  let response = await fetch(url)
  let data = await response.json()
  return data
}

const getQuote = async () => {
  let response = await fetch ('http://quotes.stormconsultancy.co.uk/random.json')
  let data = await response.json()
  return data
}
export default {
  fetchQuestions: fetchQuestions,
  getQuote: getQuote,
}