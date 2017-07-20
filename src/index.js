import React, { Component } from 'react';

import { SearchBar } from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCZKCtMdGtHJ5E0TrUPJLbyp1E4PlU9I7U';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTsearch({key: API_KEY, term: 'tsunami-flip-bike'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect = { selectedVideo => this.setState({ selectedVideo }) }
          videos={ this.state.videos } />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('appRoot'));
