import {Link} from 'react-router-dom'
import {useCart} from '../context/CartContext'
import {useCompare} from '../context/CompareContext'

function ProductCard({product}){
    const { addToCart} = useCart()
    const {compareList,toggleCompare} = useCompare()
    const isComparing = compareList.some(p => p.productId === product.productId)
    return(
        <div className = "border rounded-lg p-4 shadow">
            <h3 className="font-semibold">
                <Link to= {`/product/${product.productId}`}>{product.productName}</Link>
                </h3>
            <p className = "text-gray-600">{product.category.categoryName}</p>
            <p className = "mt-2 font-bold"> ₹{product.price}</p>
            <div className= "flex gap-2 mt-2">
            <button className="border rounded px-3 py-1" onClick = {() => addToCart(product)}>Add to cart</button>
            <button className="border rounded px-3 py-1" onClick = {() => toggleCompare(product)}>
                {isComparing ? 'Remove from compare' : 'Compare'}
                </button>
                </div>
            </div>
        )
    }
export default ProductCard
