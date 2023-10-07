import React, { useEffect, useState, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Drawer from "../drawer/Drawer"
import Screen from '../content/content'
import Header from '../header/header'
import Favorites from '../favorites/favorites'

import { MyDataProvider } from '../../services'


function App() {
  const [cartOpened, setCartOpen] = useState(false)
  console.log('app render')
  return (
    <MyDataProvider>
      <div>
        <div className="wrapper">

          {cartOpened && <Drawer onClickCloseCart={() => setCartOpen(false)} />}

          <Header onClickOpenCart={() => setCartOpen(true)} />

          <Routes>

            <Route path="/" element={<Screen />}/>
            <Route path="/favorites" element={<Favorites />}/>
            
          </Routes>

        </div>
      </div>
    </MyDataProvider>
  )
}


export default App