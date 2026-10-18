import {Link} from 'react-router-dom'

function ProductCard({product}){
    return(
        <div className = "border rounded-lg p-4 shadow">
            <h3 className="font-semibold">
                <Link to= {`/product/${product.productId}`}>{product.productName}</Link>
                </h3>
            <p className = "text-gray-600">{product.category.categoryName}</p>
            <p className = "mt-2 font-bold"> ₹{product.price}</p>
            </div>
        )
    }
export default ProductCard
