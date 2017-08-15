import { FETCH_POSTS, FETCH_PARTICULAR_POST, DELETE_POST } from '../actions/index';
import _ from 'lodash';

//export default function(state = [], action){  < initial state is array
//what we want is objects
//luckily, lodash provide mapKeys
export default function(state = {}, action){
  switch(action.type){
    case DELETE_POST:
      return _.omit(state,action.payload);
    case FETCH_PARTICULAR_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState; << this guys ES5

      return { ...state, [action.payload.data.id] : action.payload.data}; // << refactor using ES6 new syntax
      //that square braces is not making new array, its called key interpolation
      //whatever the variable of action.payload.data.id is, make a new key
      //of this object (remember '{' '}') using action.payload.data.id's
      //value where the value equal to action.payload.data
    case FETCH_POSTS:
      //return [action.payload.data, ...state] this will returns an array [post 1,post2...]
      //somehow we have to convert it to object
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
