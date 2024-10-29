import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer
  }
})