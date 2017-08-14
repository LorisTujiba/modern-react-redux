import { combineReducers } from 'redux';
import { reducer  as formReducer } from 'redux-form';
import postsReducers from './posts';

export const rootReducers = combineReducers({
  posts : postsReducers,
  form : formReducer
});

export default rootReducers;
