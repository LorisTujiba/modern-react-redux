import React , {Component} from 'react';
import {connect} from 'react-redux';

class BookLists extends Component{

  renderList(){
    return this.props.books.map((book,index) =>{
      return (
        <li key={index} className="list-group-item"> {book.title} </li>
      );
    });
  }

  render(){
    return(
      <ul className="lsit-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  //whatever is returned will show up as props
  // inside of BookLists
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookLists);
