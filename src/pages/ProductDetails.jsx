import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function ProductDetails(){
    const{productId} = useParams()
    const[product,setProduct] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8080/api/public/products/${productId}`)
        .then(response =>{
            setProduct(response.data)
           } )
        },[productId])
    if(!product) return <p className="p-8"> Loading ...</p>
    return(
        <div className="p-8">
             <h1 className="text-3xl font-bold">{product.productName}</h1>
                        <p className = "text-gray-600">{product.category.categoryName}</p>
                        <p className = "mt-2 font-bold"> ₹{product.price}</p>
                        <p className = "mt-2 "> {product.description}</p>
                        <p className ="mt-2 font-bold">In stock: {product.quantity}</p>
            </div>
        )
    }
export default ProductDetails