import { BrowserRouter} from 'react-router-dom'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {CartProvider} from './context/CartContext'
import {CompareProvider} from './context/CompareContext'
import { AuthProvider } from './context/AuthContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <CartProvider>
              <CompareProvider>
                  <AuthProvider>
    <App />
    </AuthProvider>
    </CompareProvider>
    </CartProvider>
    </BrowserRouter>
  </StrictMode>
)
