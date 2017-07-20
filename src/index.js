import React, { Component } from 'react';

import { SearchBar } from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import _ from 'lodash';
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

    this.videoSearch('tsunami-flip-bike');
  }

  videoSearch(term) {
    YTsearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect ={ selectedVideo => this.setState({ selectedVideo }) }
          videos={ this.state.videos } />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('appRoot'));
