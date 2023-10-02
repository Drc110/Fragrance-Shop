import React, { useEffect, useState, createContext } from 'react'
import axios from 'axios'
import CardItem from "../card/CardItem"
import Drawer from "../drawer/Drawer"

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

export const appContext = createContext({})

function App() {
  const [items, setItems] = useState([])
  const [cartOpened, setCartOpen] = useState(false)
  const [itemsInCart, setCartItems] = useState([])
  const [searchValue, setSerachValue] = useState('')

  const changeSeaarch = (event) =>{
    setSerachValue(event.target.value)
  }
  const onAddToCart = (obj) =>{
    axios.post('https://6509cc03f6553137159c07d1.mockapi.io/cart', obj)
    obj.id = itemsInCart.length + 1 //??????????????????? not working (add 2, rem 1st, add new, del new)
    setCartItems(prev => [...prev, obj])
  }
  const onClickFav = (obj) =>{

    console.log(obj)
  }
  const onRemoveFromCart = (id) =>{
    axios.delete(`https://6509cc03f6553137159c07d1.mockapi.io/cart/${id}`) 
    console.log(id)
    setCartItems(prev => prev.filter(el => el.id != id))
  }


  useEffect(() => {
    setItems(jsonData)
  }, [])

  return (
    <appContext.Provider value={{itemsInCart}}>
      <div>
        <div className="wrapper">

          {cartOpened && <Drawer onClickCloseCart={() => setCartOpen(false)} onRemove={onRemoveFromCart} />}

          <header>
            <h1>Sigma Fragrance</h1>
            <div className='headerRight'>
              <img onClick={() => setCartOpen(true)} src="./cart.svg" alt="cart" /> {/* onClick={onClickopenCart} into one ?div? */}
              <h3 onClick={() => setCartOpen(true)}>7000 руб</h3>
              <img onClick={() => setFavOpened(true)} src="./heart.svg" alt="liked" />
              <img src="./profile.svg" alt="profile" />
            </div>
          </header>

          <div className="content">
            <div className='underHeader'>
              <h2>Все ароматы</h2>
              <div className='searchBlock'>
                <img src="/lense.svg" alt="" />
                <input onChange={changeSeaarch} value={searchValue} placeholder='Поиск...' type="text" /> {/* Dопилить крестик */}
              </div>
            </div>

            <div className="fragrCards">

              {items
                .filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase()) || el.brand.toLowerCase().includes(searchValue.toLowerCase()))
                .map(el => (
                  <CardItem key={el.title}
                    brand={el.brand}
                    title={el.title}
                    price={el.price}
                    imageUrl={el.imageUrl}
                    onPlusClick={() => onAddToCart(el)} //passing el dir in onPlusClick prev?? // fav here onLoad
                    onFavClick={() => onClickFav(el)}
                  />))}

            </div>
          </div>
        </div>
      </div>
    </appContext.Provider>
  )
}


export default App