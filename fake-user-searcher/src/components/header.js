import React, {Component} from 'react';
import { PageHeader, Jumbotron } from 'react-bootstrap';

class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      term : ''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(){

  }

  render(){
    return(
      <div>
        <PageHeader>
          Comments Finder!
        </PageHeader>
        <Jumbotron>
          <p>
            Click a username to find out their comments!
          </p>
        </Jumbotron>
      </div>
    )
  }
}


export default Header;
