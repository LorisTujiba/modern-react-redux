import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
  }

  onInputChange(term){
    this.props.onSearchTermChange(term);
  }

  render(){
    return(
      <div className="search-bar">
        <input
          placeholder="search a video..."
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }
}

export default SearchBar;
