import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';


// components
import Navbar from './components/Navbar/Navbar';
import Error from './pages/Error';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';




const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/productDetail/:id" component={ProductDetail} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
