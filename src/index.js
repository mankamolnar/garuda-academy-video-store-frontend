import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import './components/common/common.css';

serviceWorker.register();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

//serviceWorker.unregister();
