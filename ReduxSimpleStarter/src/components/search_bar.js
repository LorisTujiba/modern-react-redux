import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      term : ''
    }
  }

  render(){
    return(
      <div>
        <div>
          <input onChange={event => console.log(this.setState({term:event.target.value}))}/>
        </div>
        <div>
          {this.state.term}
        </div>
      </div>
    )
  }
}

export default SearchBar;
