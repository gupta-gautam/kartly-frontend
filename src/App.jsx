import {Routes,Route}  from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
      <>
      <Header/>
      <Routes>
          <Route path ="/" element ={<Home />} />
          <Route path= "/shop" element ={<Shop/>} />
          <Route path ="/product/:productId" element={<ProductDetails/>}/>
          </Routes>
          <Footer/>
          </>
      )
}

export default App
