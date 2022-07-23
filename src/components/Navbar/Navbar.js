import './Navbar.css'
import CartIcon from '../CartIcon/CartIcon'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Navbar = () => {
    return (
        <nav className = 'Navbar'>
            <div>
                <h1>Rotary</h1>
            </div>

            <div>
                <button>SPORT</button>
                <button>STREET</button>
                <button>CLASSIC</button>
            </div>

            <div className = 'Cart'>
                <ItemListContainer greeting = 'Hola user'/>
                <CartIcon />
            </div>
        </nav>
    )
}

export default Navbar