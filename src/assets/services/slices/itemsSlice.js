import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const itemSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items.push(...action.payload)
    },
  },
})

export const { setItems } = itemSlice.actions

export default itemSlice.reducer