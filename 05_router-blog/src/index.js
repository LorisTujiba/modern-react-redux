import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import logger from 'redux-logger';

import reducers from './reducers/index';
import PostsIndex from './components/PostIndex';
import PostsNew from './components/PostsNew';

const store = applyMiddleware(ReduxPromise, logger)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/" component={PostsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root')
);
