import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';

//  This makes sure that an action flows through reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					key={book.title} 
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
						{book.title}
				</li>
			)
		})
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

//  Takes in all of the application state and return only what you need
//  Glue between react and redux
function mapStateToProps(state) {
	//  What is mapped here will end up as props inside BookList
	return {
		books: state.books
	};
}

//  Anything returned from this will end up as props
//  on BookList container
function mapDispatchToProps(dispatch) {
	//  Whenever selectBook is called, the result should be passed
	//  to all reducers
	//  dispatch function makes sure that everything is apssed on
	return bindActionCreators({
		selectBook: selectBook
	}, dispatch)
}

//  Produces a container.  A component that knows the redux state.
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BookList);

