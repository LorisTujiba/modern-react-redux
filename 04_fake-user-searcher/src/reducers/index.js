import { combineReducers } from 'redux';
import userReducer from './users';
import commentReducer from './comments';

const rootReducer = combineReducers({
  users : userReducer,
  comments : commentReducer
});

export default rootReducer;
