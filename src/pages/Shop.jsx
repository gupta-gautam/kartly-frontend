import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

function Shop(){

    const[products,setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/api/public/products')
        .then(response => {
            setProducts(response.data)
            })
        },[])
    return(
        <div className="p-8">
            <h1 className= "text-3xl font-bold mb-4">Shop</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product =>(
                <ProductCard key={product.productId} product ={product}/>
                ))}
            </div>
            </div>
        )
    }

export default Shop