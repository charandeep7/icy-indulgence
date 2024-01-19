import { configureStore } from '@reduxjs/toolkit'
import addToCartReducer from './slice/AddtocartSlice'

export const store = configureStore({
  reducer: {
    cart: addToCartReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch