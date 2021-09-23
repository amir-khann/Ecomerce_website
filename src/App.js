import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';


// components
import Navbar from './components/Navbar/Navbar';




const App = () => {
  return (
    <Router>
     
      <Navbar />
      <Main />
   
      <Switch>
       
        <Route path="*">

        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
