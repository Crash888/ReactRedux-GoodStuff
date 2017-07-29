import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};

		//  This says replace the existing function and bind 'this'
		//  to the function.  Otherwise, 'this' because some mysterious
		//  value 
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);

	}

	onInputChange(event) {
		this.setState({
			term: event.target.value
		})
	}

	onFormSubmit(event) {
		//  Prevents the form from submitting itself.
		//  We do this because a 'submit' refrshes the page
		//  and wipes out the search box.
		event.preventDefault();

		//  Now we can fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({
			term: ''
		});
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}
				  className="input-group">
				<input 
					placeholder="Get a five-day forecast in your favourite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
						Submit
					</button>
				</span>
			</form>
		)
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		fetchWeather
	}, dispatch)
}

//  Null is passed in here first because it says that
//  we don;t need state.
export default connect(
	null, 
	mapDispatchToProps
)(SearchBar)


