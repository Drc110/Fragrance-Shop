import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [
        {
         "brand": "Vercase",
         "title": "Eros",
         "price": [3490, 5500, 7500],
         "imageUrl": "https://parfumdecor.ru/upload/images/92530.jpg ",
         "volume": [30, 50, 70],
         "gender": 1
        },
        {
         "brand": "Memo",
         "title": "Marfa",
         "price": [5000, 10000, 19990],
         "imageUrl": "/fr2.jpg",
         "volume": [30, 50, 70],
         "gender": 3
        },
        {
         "brand": "Initio",
         "title": "PSYHODELIC LOVE",
         "price": [3700, 6200, 7900],
         "imageUrl": "/fr3.jpg",
         "volume": [30, 50, 70],
         "gender": 2
        },
        {
         "brand": "Dior",
         "title": "Sauvage",
         "price": [3000, 4990, 8900],
         "imageUrl": "/fr4.webp",
         "volume": [30, 50, 70],
         "gender": 1
        },
        {
         "brand": "Jo Malone",
         "title": "Elderflower",
         "price": [4500, 7500, 11900],
         "imageUrl": "/fr5.jpg",
         "volume": [30, 50, 70],
         "gender": 3
        },
        {
          "brand": "Byredo",
          "title": "Gipsy Water",
          "price": [4200, 6200, 8900],
          "imageUrl": "https://fraguru.com/mdimg/perfume/375x500.3575.jpg",
          "volume": [30, 50, 70],
          "gender": 2
         },
         {
          "brand": "By Kilian",
          "title": "Angels' Share",
          "price": [5000, 7990, 10900],
          "imageUrl": "https://fimgs.net/mdimg/perfume/375x500.62615.jpg",
          "volume": [30, 50, 70],
          "gender": 3
         },
         {
          "brand": "Tom Ford",
          "title": "Tobacco Vanille",
          "price": [3000, 4990, 8900],
          "imageUrl": "https://fimgs.net/mdimg/perfume/375x500.1825.jpg",
          "volume": [30, 50, 70],
          "gender": 1
         },
         {
          "brand": "Carolina Herrera",
          "title": "Good Girl",
          "price": [3000, 4990, 8900],
          "imageUrl": "https://fimgs.net/mdimg/perfume/375x500.39681.jpg",
          "volume": [30, 50, 70],
          "gender": 2
         },
         {
          "brand": "Creed",
          "title": "Aventus",
          "price": [3000, 4990, 8900],
          "imageUrl": "https://fimgs.net/mdimg/perfume/375x500.9828.jpg",
          "volume": [30, 50, 70],
          "gender": 1
         }
    ]
}

export const itemSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems(state, action) {
        state.items = action.payload
    },
  },
})

export const { setItems } = itemSlice.actions

export default itemSlice.reducer