
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';




// navbar styles
import './Navbar.scss';

const Navbar = () => {


  const cart = useSelector((state) => state)
  const { cartList } = cart
  console.log(cartList.cartItems.length);

  return (
    <header className="site-header">
       <Link to="/"><div className="logo">Super <span>Store </span></div></Link>
        <ul>
    
                  <li >
                    <Link  to="/" className="site-header__link">
                      Home
                    </Link>
                    </li>
                    <li>
                    <Link  to="products" className="site-header__link">
                      Products 
                    </Link>
                    </li>
                    <li>
                    <Link  to="CART" className="site-header__link">
                      <i className="fas fa-shopping-cart"></i><span>{cartList.cartItems.length}</span>
                    </Link>
                  </li>
             
        </ul>
    </header>
  );
};

export default Navbar;
