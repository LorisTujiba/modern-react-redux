import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import './style.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default class App extends Component{

  render(){
    return(
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    )
  }

}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  ,document.getElementById('root')
);
