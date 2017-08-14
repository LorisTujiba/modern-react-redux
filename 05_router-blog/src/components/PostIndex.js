import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Grid, Col, Row, Panel, Button} from 'react-bootstrap';
import _ from 'lodash';

class PostsIndex extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, post =>{
      return(
        <ListGroupItem key={post.id}>
          <Panel header={post.title}>
            {post.content}
          </Panel>
        </ListGroupItem>
      )
    })
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={10} xs={10}>
            <h3>Posts</h3>
          </Col>
          <Col md={2} xs={2}>
            <Link to="posts/new">
              <Button bsStyle="primary">Add a Post</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              { this.renderPosts() }
            </ListGroup>
          </Col>
        </Row>
      </Grid>
    );
  }

}

function mapStateToProps(state){
  return{
    posts : state.posts
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      fetchPosts
    }
    ,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsIndex);
