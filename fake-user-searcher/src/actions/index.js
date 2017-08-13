import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export function fetchUser(){
  const request = axios.get('https://jsonplaceholder.typicode.com/users');
  return{
    type : FETCH_USER,
    payload : request
  };
}

export function fetchComments(userId){
  const request = axios.get('https://jsonplaceholder.typicode.com/posts?userId='+userId);
  return{
    type : FETCH_COMMENTS,
    payload : request
  };
}
