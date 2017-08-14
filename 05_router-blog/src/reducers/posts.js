import { FETCH_POSTS } from '../actions/index';
import _ from 'lodash';

//export default function(state = [], action){  < initial state is array
//what we want is objects
//luckily, lodash provide mapKeys
export default function(state = {}, action){
  switch(action.type){
    case FETCH_POSTS:
      //return [action.payload.data, ...state] this will returns an array [post 1,post2...]
      //somehow we have to convert it to object
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
