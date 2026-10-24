import {useCart} from '../context/CartContext'
import BudgetMeter from '../components/BudgetMeter'

function Cart(){
    const {cart,addToCart,removeFromCart,decreaseQuantity,total} = useCart()

    return(
        <div className= "p-8">
            <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
            <BudgetMeter/>
            {cart.map(item => (
                <div key = {item.productId} className="border rounded p-3 mb-2 flex justify-between">
                <span>{item.productName}</span>
                <span>Qty: {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
                <button onClick ={() => decreaseQuantity(item.productId)}> - </button>
                <button onClick ={() => removeFromCart(item.productId)}>Remove</button>
                <button onClick ={() => addToCart(item)}> + </button>
                </div>
               ))}
           <p className="mt-4 font-bold">Total: ₹{total}</p>
        </div>
        )
    }
export default Cart