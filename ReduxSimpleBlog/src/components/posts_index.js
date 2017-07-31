import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

	//  Called when this component is shown
	//  inside the dom
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		//  We have an object here instead of an array
		//  so use the lodash function to help us
		return _.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id} >
					{post.title}
				</li>
			)
		})
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new">
						Add a Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	}
}

//  The { fetchPosts } is the same as defining the function
//  mapDispatchToProps.  It is all happening behind the
//  scenes
export default connect(
	mapStateToProps,
	{ fetchPosts }
)(PostsIndex);
