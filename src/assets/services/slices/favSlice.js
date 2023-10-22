import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favItems: []
}

export const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addToFav(state, action) {
        state.favItems.push(action.payload)
    },
    removeFromFav(state, action) {
        state.favItems = state.favItems.filter((obj) => obj.title != action.payload)
    },
  },
})

export const { addToFav,  removeFromFav } = favSlice.actions

export default favSlice.reducer