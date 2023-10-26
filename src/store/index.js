import { configureStore } from "@reduxjs/toolkit";
import quizForm from '../features/quiz-form/quiz-form.slice'
import quizBoard from '../features/quiz-board/quiz-board.slice'
const store = configureStore({
  reducer:{
    quizForm,
    quizBoard
  }
})

export default store
