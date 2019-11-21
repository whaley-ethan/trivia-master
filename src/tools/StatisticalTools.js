import dbAPI from '../api/dbAPI'

const getUserData = async (id) => {
  
  const allQuizes = await dbAPI.getAllQuizes()
  const userQuizes = await allQuizes.filter(quiz => quiz.user===id)
  const userQuizIDs = await userQuizes.map(quiz => quiz.id)
  const allAnswers = await dbAPI.getAllAnswers()
  const userAnswers = await allAnswers.filter(answer => userQuizIDs.includes(answer.quiz))
  return userAnswers
  
}

export default getUserData