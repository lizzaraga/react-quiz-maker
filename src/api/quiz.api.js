class QuizApi{

  async createQuiz(category, difficulty, amount = 5){
    const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
    const data = await response.json()
    return data['results']
  }
}

export const quizApi = new QuizApi()
export default quizApi
