import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './assets/components/pages/App.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
  //</React.StrictMode>
)
