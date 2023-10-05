import React, { createContext, useContext, useState } from 'react';

let jsonData = [
    {
     "brand": "Vercase",
     "title": "Eros",
     "price": 5500,
     "imageUrl": "https://parfumdecor.ru/upload/images/92530.jpg "
    },
    {
     "brand": "Memo",
     "title": "Marfa",
     "price": 19990,
     "imageUrl": "/fr2.jpg"
    },
    {
     "brand": "Initio",
     "title": "PSYHODELIC LOVE",
     "price": 7900,
     "imageUrl": "/fr3.jpg"
    },
    {
     "brand": "Dior",
     "title": "Sauvage",
     "price": 8900,
     "imageUrl": "/fr4.webp"
    },
    {
     "brand": "Jo Malone",
     "title": "Elderflower",
     "price": 11900,
     "imageUrl": "/fr5.jpg"
    }
]

const MyDataContext = createContext();

export function useMyData() {
  return useContext(MyDataContext);
}

/* export let itemsActions = null */

export function MyDataProvider({ children }) {
  const [items, setItems] = useState(jsonData);
  const [cartItems, setCart] = useState([{
    "brand": "Vercase",
    "title": "Eros",
    "price": 5500,
    "imageUrl": "https://parfumdecor.ru/upload/images/92530.jpg "
   },
   {
    "brand": "Memo",
    "title": "Marfa",
    "price": 19990,
    "imageUrl": "/fr2.jpg"
   }]);
  const [favItems, setFav] = useState([]);

  const itemsActions = {
    setItemToCart: (obj) => {
      setCart([...cartItems, obj])
    },
    removeCart: (obj) => {
      setCart(prev => prev.filter((el) => el.title != obj.title))
    },
    isItemAdded: (obj) => {
      return cartItems.some(el => el.title == obj.title)
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
      return cartItems.reduce((sum, obj) => obj.price + sum, 0)
    }
  } 

  return (
    <MyDataContext.Provider value={{ items, cartItems, favItems, itemsActions}}>
      {children}
    </MyDataContext.Provider>
  );
}