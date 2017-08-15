import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchParticularPost } from '../actions';

class PostsShow extends Component {

componentDidMount() {
  this.props.fetchParticularPost(this.props.match.params.id)
}

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Panel>

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

export default connect(mapStateToProps,{ fetchParticularPost })(PostsShow);
