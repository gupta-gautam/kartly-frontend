import {Link} from 'react-router-dom'

function Header(){
    return(
        <header className="flex items-center justify-between p-4 shadow">
            <h1 className="text-xl font-bold">Kartly</h1>
            <nav className="flex gap-4">
                <Link to="/">Home</Link>
                 <Link to="/shop">Shop</Link>
                  <Link to="/cart">Cart</Link>
                  </nav>
                  </header>
        )
    }

export default Header