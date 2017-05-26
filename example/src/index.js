import React from 'react';
import { render } from 'react-dom';
import configureStore from '../example/store/configureStore';
import { Provider } from 'react-redux';
// import App from './App';

import App from './App';
import '../public/styles/index.css';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
