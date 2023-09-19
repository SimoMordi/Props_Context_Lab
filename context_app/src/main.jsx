import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import PrimaryProvider from './Context/primaryContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PrimaryProvider>
      <App />
    </PrimaryProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
