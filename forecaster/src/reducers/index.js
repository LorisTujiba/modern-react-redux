import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weathers : WeatherReducer
});

export default rootReducer;
