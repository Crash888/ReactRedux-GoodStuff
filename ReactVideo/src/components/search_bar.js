import React, { Component } from 'react';

class SearchBar extends Component {

	//  First function called when object is created
	constructor(props) {
		// Calls the Component constructor
		super(props);

		//  Initialize state.  term = searchTerm
		//  render() is called whenever the state is changed
		this.state = {
			term: ''
		};
	}

	//  onChange called when text changes on <input />
	//  All browser events make a call with an event object
	//  The event object describes the event that occurred
	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {

		this.setState({ 
			term: term 
		});

		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;

