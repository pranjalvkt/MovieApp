import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './useSlice'

const store = configureStore({
  reducer: {
    movies: movieReducer
  }
})
export default store;