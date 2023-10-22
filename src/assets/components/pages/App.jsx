import Header from '../header/header'

import { Route, Routes } from 'react-router-dom'
import { store } from '../../services/store.js'
import { Provider } from 'react-redux'
import { lazy, Suspense } from 'react'

const Favorites = lazy(() => import('./favorites'))
const Content = lazy(() => import('./content'))

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="wrapper">
          <Header/>

          <Routes>

              <Route path="/" element={
                <Suspense fallback={<div>Not found</div>}>
                  <Content />
                </Suspense>
              }/>
              
              <Route path="/favorites" element={
                <Suspense fallback={<div>Not found</div>}>
                  <Favorites />
                </Suspense>
              }/>
            
          </Routes>

        </div>
      </div>
    </Provider>
  )
}


export default App