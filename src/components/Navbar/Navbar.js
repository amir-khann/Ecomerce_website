
import { Link } from 'react-router-dom';

// import navbar links from utils
import { navbarLinks } from '../../utils/navbarLinks';




// navbar styles
import './Navbar.scss';

const Navbar = () => {

  return (
    <header className="site-header">
       <Link to="/"><div className="logo">Super <span>Store </span></div></Link>
        <ul>
        {navbarLinks.map((link) => {
                const { id, text, path } = link;
                return (
                  <li key={id}>
                    <Link  to={path} className="site-header__link">
                      {text}
                    </Link>
                  </li>
                );
              })}
        </ul>
    </header>
  );
};

export default Navbar;
