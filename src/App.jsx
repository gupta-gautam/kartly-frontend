import {Routes,Route}  from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import CompareTray from './components/CompareTray'
import Compare from './pages/Compare'

function App() {
  return (
      <>
      <Header/>
      <Routes>
          <Route path ="/" element ={<Home />} />
          <Route path= "/shop" element ={<Shop/>} />
          <Route path ="/product/:productId" element={<ProductDetails/>}/>
          <Route path ="/cart" element={<Cart/>}/>
          <Route path ="/compare" element={<Compare/>}/>
          </Routes>
          <CompareTray />
          <Footer/>
          </>
      )
}

export default App
