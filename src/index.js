import ReactDOM from 'react-dom';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'bootstrap/dist/css/bootstrap-grid.min.css';

import './index.scss';
import App from './App';

// Redux
import { Provider } from 'react-redux';

import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
