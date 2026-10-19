import {useCart} from '../context/CartContext'
import {useState,useEffect} from 'react'

function Cart(){
    const {cart,addToCart,removeFromCart,decreaseQuantity} = useCart()
    const total = cart.reduce((sum,item) => sum + Number(item.price*item.quantity),0)
    const [budget,setBudget] = useState(() => {
        const saved = localStorage.getItem('budget')
        return saved ? Number(saved) : 0
        })
    useEffect (() => {
        localStorage.setItem('budget',budget)
        },[budget])

    return(
        <div className= "p-8">
            <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
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