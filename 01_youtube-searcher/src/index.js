import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import LD from 'lodash';

const API_KEY = 'AIzaSyBG-RPRSVd0G9s6hkizEAWHPulKfO_-gio'

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo : null
    };

    this.videoSearch('LorisTujiba')
  }

  videoSearch(term){
    YTSearch({key : API_KEY, term : term}, (videos) => {
      this.setState({
        videos,
        selectedVideo : videos[0]
      });

      //this.setState({videos:videos}), if the key and the props are the same, you can compact it like the line above
    });
  }

  render(){

    const CallSearch =LD.debounce((term) => {this.videoSearch(term)},300)

    return (
      <div>
        <SearchBar onSearchTermChange={CallSearch}/>
        {/* passing videos props to the video list */}
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
          />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,document.querySelector('.container')
);
