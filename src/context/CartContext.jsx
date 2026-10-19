import { createContext,useContext,useState , useEffect} from 'react'
const CartContext = createContext()

export function CartProvider({children}){
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('cart')
        return saved ? JSON.parse(saved) : []
       } )
    useEffect (() => {
        localStorage.setItem('cart', JSON.stringify(cart))
   },[cart])

    function addToCart(product){
        const existing = cart.find(item => item.productId === product.productId)
        if(existing){
            if(existing.quantity >= existing.stock) return
    setCart(cart.map(item =>
        item.productId === product.productId
        ? { ...item,quantity: item.quantity + 1}
        : item
        ) )
        }else{
            setCart([...cart,{ ...product,stock: product.quantity,quantity: 1}])
            }
        }
    function removeFromCart(productId){
        setCart(cart.filter(item => item.productId !== productId))
        }

    function decreaseQuantity(productId){
        const existing = cart.find(item => item.productId === productId)
        if(existing.quantity > 1){
            setCart(cart.map(item =>
                item.productId ===  productId
                ? { ...item,quantity: item.quantity -1}
                : item
                ))
            }else{
                 setCart(cart.filter(item => item.productId !== productId))
                }
        }

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart,decreaseQuantity}}>
            {children}
            </CartContext.Provider>
        )
    }
export function useCart(){
    return useContext(CartContext)
    }