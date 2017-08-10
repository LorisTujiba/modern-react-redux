import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-search';

const API_KEY = 'AIzaSyBG-RPRSVd0G9s6hkizEAWHPulKfO_-gio'

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos : []
    }

    YTSearch({key : API_KEY, term : 'Loris Tujiba'}, (videos) => {
      this.setState({videos})
      //this.setState({videos:videos}), if the key and the props are the same, you can compact it like the line above
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,document.querySelector('.container')
)
