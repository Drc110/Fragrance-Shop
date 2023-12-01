import Header from '../header/header'
import Content from './content'
import { Route, Routes } from 'react-router-dom'
import { store } from '../../services/store.js'
import { Provider } from 'react-redux'
import { lazy } from 'react'

const Favorites = lazy(() => import('./favorites'))

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Header />

        <Routes>
          <Route path="/" Component={Content} />

          <Route path="/favorites" Component={Favorites} />
        </Routes>

      </div>
    </Provider>
  )
}


export default App