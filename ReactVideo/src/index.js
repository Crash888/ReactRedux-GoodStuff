import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//  Youtbe search functions
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//  You will need to get an API Key from Google and put it in
//  this file
import { API_KEY } from './api_key.js';

//  Create a new component
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {

		//  lodash function that will make sure that videoSearch is called
		//  every 300ms
		const videoSearch = _.debounce((term) => {
			this.videoSearch(term) 
		}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}

//  Take the generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
