import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PixabayState from './PixaBay/PixabayState.jsx'

createRoot(document.getElementById('root')).render(
  <PixabayState>
    <App />
  </PixabayState>,
)
