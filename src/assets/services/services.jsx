import { createContext, useContext, useState } from 'react';

let jsonData = [
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
     },
]

const MyDataContext = createContext();

export function useMyData() {
  return useContext(MyDataContext);
}

/* export let itemsActions = null */

export function MyDataProvider({ children }) {
  const [items, setItems] = useState(jsonData);
  const [cartItems, setCart] = useState([]);
  const [favItems, setFav] = useState([]);

  const itemsActions = {
    setItemToCart: (...obj) => {
      let temp = {...jsonData.filter(el => (el.title == obj[0]))[0]}
      temp.price = temp.price[obj[1]]
      temp.volume = temp.volume[obj[1]] 
      temp.amount = obj[2]
      setCart([...cartItems, temp])  //copy price from first array (better fetch from db)
    },
    removeCart: (title) => {
      setCart(prev => prev.filter((el) => el.title != title))
    },
    isItemAdded: (title) => {
      return cartItems.some(el => el.title == title)
    },
    setItemToFav: (obj) => {
      setFav([...favItems, obj])
    },
    removeFav: (obj) => {
      setFav(prev => prev.filter((el) => el.title != obj.title))
    },
    isItemFav: (obj) => {
      return favItems.some(el => el.title == obj.title)
    },
    countPrice: () => {
      return cartItems.reduce((sum, obj) => (obj.price * obj.amount) + sum, 0)
    }
  }

  return (
    <MyDataContext.Provider value={{ items, cartItems, favItems, itemsActions}}>
      {children}
    </MyDataContext.Provider>
  );
}