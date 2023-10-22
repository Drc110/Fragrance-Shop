import { configureStore } from '@reduxjs/toolkit'
import cart from './slices/cartSlice'
import items from './slices/itemsSlice'
import fav from './slices/favSlice'

export const store = configureStore({
  reducer: {
    cart,
    items,
    fav
  }
})