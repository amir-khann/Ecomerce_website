import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
// pages
import Category from './pages/Category';
import Error from './pages/Error';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';




const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/productDetail/:id" component={ProductDetail} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/category/:category" component={Category} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
