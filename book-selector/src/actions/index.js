export function selectBook(book){
  // An Action Creator, returns an action
  // has type and payload property
  return{
    type : 'BOOK_SELECTED',
    payload : book
  };
}
