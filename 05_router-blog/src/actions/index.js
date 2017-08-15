import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';
export const FETCH_PARTICULAR_POST = 'FETCH_PARTICULAR_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=tujiba';

export function fetchPosts(){
  const req = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload : req
  };
}

export function createPost(values, callback){
  const req = axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
  .then(() => callback());// call the callback which is the browser push (see PosteNew.js, line 49)

  return {
    type: CREATE_POSTS,
    payload : req
  };
}

export function fetchParticularPost(id){
  const req = axios.post(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_PARTICULAR_POST,
    payload : req
  };
}
