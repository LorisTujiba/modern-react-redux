import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

import App from './components/app';

const store = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={store(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root')
);
