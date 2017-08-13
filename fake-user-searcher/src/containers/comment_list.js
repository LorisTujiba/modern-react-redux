import React, { Component } from 'react';
import { Well, Panel} from 'react-bootstrap';
import { connect } from 'react-redux';

class CommentList extends Component{

  render(){
    console.log("comments",this.props.comments)

    if(!this.props.comments[0]){
      return(
        <div>Loading...</div>
      )
    }

    return(
      <div>
        <Panel>
          {
            this.props.comments[0].map(comment =>{
              return(
                <Well>
                  <h5>
                    {comment.title}
                  </h5>
                  <p>
                    {comment.body}
                  </p>
                </Well>
              )
            })
          }
        </Panel>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    comments : state.comments
  }
}

export default connect(mapStateToProps)(CommentList);
