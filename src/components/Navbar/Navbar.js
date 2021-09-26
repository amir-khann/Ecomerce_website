
import { Link } from 'react-router-dom';




// navbar styles
import './Navbar.scss';

const Navbar = () => {

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
                      Cart <span><i className="fas fa-shopping-cart"></i></span>
                    </Link>
                  </li>
             
        </ul>
    </header>
  );
};

export default Navbar;
