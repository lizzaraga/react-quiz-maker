import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "../../api/category.api";

export const categoriesLoaded = createAsyncThunk(
  'quizFormSlice/categoriesLoaded', async () => {
    const categories = await categoryApi.fetchCategories()
    return categories
  }
)

const quizFormSlice = createSlice({
  name: 'quizFormSlice',
  initialState: {
    categories: [],
    category: '',
    difficulty: ''
  },
  reducers:{
    categoryChanged(state, action){
      state.category = action.payload
    },
    difficultyChanged(state, action){
      state.difficulty = action.payload
    }
  },
  extraReducers(builder){
    builder.addCase(categoriesLoaded.fulfilled, (state, action) => {
      state.categories = action.payload
    })
  }
})

export const categorySelector = (state) => state.quizForm.category
export const categoriesSelector = (state) => state.quizForm.categories
export const difficultySelector = (state) => state.quizForm.difficulty
export const { categoryChanged, difficultyChanged } = quizFormSlice.actions
export default quizFormSlice.reducer
