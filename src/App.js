import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';


// components
import Navbar from './components/Navbar/Navbar';
import Error from './pages/Error';
import Home from './pages/Home';




const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
