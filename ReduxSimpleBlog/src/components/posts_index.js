import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

	//  Called when this component is shown
	//  inside the dom
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>PostsIndex</div>
		)
	}
}

//  The { fetchPosts } is the same as defining the function
//  mapDispatchToProps.  It is all happening behind the
//  scenes
export default connect(
	null,
	{ fetchPosts }
)(PostsIndex);
