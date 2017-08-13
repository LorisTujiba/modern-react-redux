import React, {Component} from 'react';
import Header from './header';
import UserList from '../containers/user_list';
import CommentList from '../containers/comment_list';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component{
  render(){
    return(
      <div>
        <Grid>
          <Row>
            <Col lg={12}>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col>
              <CommentList />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <UserList />
            </Col>
          </Row>
        </Grid>
      </div>

    )
  }
}

export default App;
