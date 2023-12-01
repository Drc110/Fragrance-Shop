import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  cartItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload)
      state.totalPrice += action.payload.price * action.payload.amount
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter((obj) => obj.title != action.payload)
      state.totalPrice = state.cartItems.reduce((sum, obj) => (obj.price * obj.amount) + sum, 0)
    },
    setAmount(state, action) {
      const findItem = state.cartItems.find((obj) => obj.title == action.payload.title)
      if(action.payload.amount >= 100){
        findItem.amount = 99
      }else if(action.payload.amount < 1){
        findItem.amount = 1
      }else{
        findItem.amount = Number(action.payload.amount)
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => (obj.price * obj.amount) + sum, 0)
    }
  },
})

export const { addToCart, removeFromCart, setAmount } = cartSlice.actions

export default cartSlice.reducer