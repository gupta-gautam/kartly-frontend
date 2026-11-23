import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useCart} from '../context/CartContext'
import {useAuth} from '../context/AuthContext'

function Header(){
    const {auth, logout} = useAuth()
    const navigate = useNavigate()
    const{cart,clearCart} = useCart()

    function handleLogout(){
        logout()
        clearCart()
        navigate('/login')
        }
    const count = cart.reduce((n,item) => n + item.quantity,0)
    return(
        <header className="flex items-center justify-between p-4 shadow">
            <h1 className="text-xl font-bold">Kartly</h1>
            <nav className="flex gap-4">
                <Link to="/">Home</Link>
                 <Link to="/shop">Shop</Link>
                  <Link to="/cart">Cart ({count})</Link>
                  {auth ? (
                      <>
                      <span>{auth.username}</span>
                      <button onClick ={handleLogout}>Logout</button>
                      </>
                      ) : (
                          <>
                          <Link to="/login">Login</Link>
                          <Link to="/register">Register</Link>
                          </>
                          )}
                  </nav>
                  </header>
        )
    }

export default Header