import Header from './components/header/Header'
import Content from './components/pages/Content'
import { Route, Routes } from 'react-router-dom'
import { store } from './services/store.js'
import { Provider } from 'react-redux'
import { lazy, Suspense } from 'react'

const Favorites = lazy(() => import('./components/pages/Favorites'))
const UserPage = lazy(() => import('./components/pages/UserPage'))

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

          <Route path="/user" element={
            <Suspense fallback={<div className="placeHolder">loading...</div>}>
              <UserPage />
            </Suspense>
          } />
        </Routes>

      </div>
    </Provider>
  )
}


export default App