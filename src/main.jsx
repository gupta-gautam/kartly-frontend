import { BrowserRouter} from 'react-router-dom'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {CartProvider} from './context/CartContext'
import {CompareProvider} from './context/CompareContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <CartProvider>
              <CompareProvider>
    <App />
    </CompareProvider>
    </CartProvider>
    </BrowserRouter>
  </StrictMode>
)
