import Header from '../header/header'
import Content from './content'
import { Route, Routes } from 'react-router-dom'
import { store } from '../../services/store.js'
import { Provider } from 'react-redux'
import { lazy, Suspense } from 'react'

const Favorites = lazy(() => import('./favorites'))

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={
            <Content />
          }/>

          <Route path="/favorites" element={
            <Suspense fallback={<div className="placeHolder">loading...</div>}>
              <Favorites />
            </Suspense>
          }/>
        </Routes>

      </div>
    </Provider>
  )
}


export default App