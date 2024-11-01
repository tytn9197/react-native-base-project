import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

// Define a TS type for the data we'll be using
export interface Post {
  id: string
  title: string
  content: string
  user: string
}

// Create an initial state value for the reducer, with that type
const initialState: Post[] = [
  { id: '1', title: 'First Post!', content: 'Hello!', user: "0" },
  { id: '2', title: 'Second Post', content: 'More text', user: "1" }
]

// Create the slice and pass in the initial state
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
        reducer(state, action: PayloadAction<Post>) {
          state.push(action.payload)
        },
        prepare(title: string, content: string) {
          return {
            payload: { id: nanoid(), title, content, user: "1" }
          }
        }
      }
  },
  selectors: {
    selectPostById: (postState ,postId: string) => {
        return postState.find(post => post.id === postId)
    }
  },
})

// Export the auto-generated action creator with the same name
export const { postAdded } = postsSlice.actions
export const { selectPostById } = postsSlice.selectors
// Export the generated reducer function
export default postsSlice