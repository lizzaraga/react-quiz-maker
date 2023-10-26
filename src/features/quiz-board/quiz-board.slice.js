import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import quizApi from "../../api/quiz.api";

export const quizzesLoaded = createAsyncThunk(
  "quizBoardSlice/quizzesLoaded",
  async ({ category, difficulty }) => {
    let quizzes = await quizApi.createQuiz(category, difficulty);
    quizzes = quizzes.map(quiz => ({
      ...quiz,
      answers: [...quiz.incorrect_answers, quiz.correct_answer].sort(() => Math.random() > 0.5 ? 1 : -1)
    }))

    return quizzes
  }
);
const quizBoardSlice = createSlice({
  name: "quizBoardSlice",
  initialState: {
    quizzes: [],
    userAnswers: [], // Will contain user answer like {questionIndex, answer}
  },
  reducers: {
    userAnswerUpdated(state, { payload: { questionIndex, answer } }) {
      state.userAnswers[questionIndex] = answer
    },
    userAnswersReset(state){
      state.userAnswers =[]
    },
    quizzesReset(state){
      state.quizzes = []
      state.userAnswers = []
    }
  },
  extraReducers(builder) {
    builder.addCase(quizzesLoaded.fulfilled, (state, action) => {
      state.quizzes = action.payload;
      state.userAnswers = []
    });
  },
});

export const quizzesSelector = (state) => state.quizBoard.quizzes;
export const userAnswersSelector = (state) => state.quizBoard.userAnswers;
export const { userAnswerUpdated, userAnswersReset, quizzesReset } = quizBoardSlice.actions
export default quizBoardSlice.reducer;
