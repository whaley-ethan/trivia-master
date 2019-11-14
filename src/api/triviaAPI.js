const fetchQuestion = async (category, difficulty) => {
  
  let response = await fetch(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficulty}&type=multiple`)
  let data = await response.json()
  return data
}

export default {
  fetchQuestion: fetchQuestion
}