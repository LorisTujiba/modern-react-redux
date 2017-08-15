import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchParticularPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {

  componentDidMount() {
    if(!this.props.post){
      this.props.fetchParticularPost(this.props.match.params.id)
    }
  }

  onDelete(){
    this.props.deletePost(this.props.match.params.id, () => {
      this.props.history.push('/');
    });
  }

  render() {

    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <Grid>
        <Row>
          <Col>
            <Link to="/">Back to Index</Link>
            <Button bsStyle="danger" onClick={this.onDelete.bind(this)}>
              Delete Post
            </Button>
            <Panel header={post.title}>
              {post.content}
              <h6>#{post.id} - {post.categories}</h6>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps({ posts }, ownProps){
  return{
    post : posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps,{ fetchParticularPost, deletePost })(PostsShow);
