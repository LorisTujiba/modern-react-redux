import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchComments } from '../actions/index';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class UserList extends Component{

  constructor(props){
    super(props)
    this.props.fetchUser();
  }

  render(){
    if(!this.props.users[0])
    {
      return(
        <div>
          Loading...
        </div>
      )
    }

    return(
      <ListGroup>
        {this.props.users[0].map(user =>{
          return(
            <ListGroupItem
              key={user.id}
              header={user.name}
              onClick={()=>this.props.fetchComments(user.id)}
            >
              {user.email}
            </ListGroupItem>
          )
        })}
      </ListGroup>
    )
  }

}

function mapStateToProps(state){
  return{
    users: state.users
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchUser,fetchComments},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);
