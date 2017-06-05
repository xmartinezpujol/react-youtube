import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCzeXJiOZHF9bq0KOPFvnHZi0xHAOCfXdc';

// Stylesheets
import './scss/styles.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('hackermen');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term, maxResults: 10}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 1000);

    return (
      <div>
        <nav className='top-menu'>
          <img className='logo' src='img/YouTube_logo_2015.svg' />
          <SearchBar onSearchTermChange={videoSearch} />
        </nav>
        <div className='page'>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
