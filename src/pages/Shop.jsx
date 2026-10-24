import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import BudgetMeter from '../components/BudgetMeter'

function Shop(){

    const[products,setProducts] = useState([])
    const[selectedCategory,setSelectedCategory] = useState(null)
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/api/public/products')
        .then(response => {
            setProducts(response.data)
            })
        },[])
    useEffect(() => {
        axios.get('http://localhost:8080/api/public/categories')
        .then(response => {
            setCategories(response.data)
            })
        },[])
    const visibleProducts = selectedCategory === null
    ? products
    : products.filter(p => p.category.categoryId === selectedCategory)

    return(
        <div className="p-8">
            <h1 className= "text-3xl font-bold mb-4">Shop</h1>
            <BudgetMeter/>
            <button className = {`border rounded px-3 py-1 mr-2 mb-4 ${selectedCategory === null ? 'bg-black text-white' : ''}`}
            onClick={() =>
                setSelectedCategory(null)}>All</button>
            {categories.map(category => (
                <button className = {`border rounded px-3 py-1 mr-2 mb-4 ${selectedCategory === category.categoryId ? 'bg-black text-white' : ''}`}
                key={category.categoryId}
                onClick={() => setSelectedCategory(category.categoryId)}>
                {category.categoryName}
                </button>
                ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleProducts.map(product =>(
                <ProductCard key={product.productId} product ={product}/>
                ))}
            </div>
            </div>
        )
    }

export default Shop