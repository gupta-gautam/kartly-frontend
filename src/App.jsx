import {Routes,Route}  from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import CompareTray from './components/CompareTray'
import Compare from './pages/Compare'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
      <>
      <Header/>
      <Routes>
          <Route path ="/" element ={<Home />} />
          <Route path= "/shop" element ={<Shop/>} />
          <Route path ="/product/:productId" element={<ProductDetails/>}/>

          <Route path ="/compare" element={<Compare/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="*" element={<h1 className="p-8">Page not found</h1>} />
          </Routes>
          <CompareTray />
          <Footer/>
          </>
      )
}

export default App
