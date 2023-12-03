import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const itemSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
    updateItems(state, action) {
      state.items.push(...action.payload)
    },
  },
})

export const { setItems, updateItems } = itemSlice.actions

export default itemSlice.reducer