import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
	case FETCH_POSTS:
		return _.mapKeys(action.payload.data, 'id');
	case FETCH_POST:
		
		//  This is ES6
		return { ...state, [action.payload.data.id]: action.payload.data }

		/*  ES5 way to add in the new post to the existing
			posts object
		const post = action.payload.data;
		const newState =  { 
			...state 	
		}
		newState[post.id] = post;
		return newState;
		*/
	case DELETE_POST:
		//  Looks at state object.  If it contains the key (action.payload)
		//  then remove it and return the object without.
		return _.omit(state, action.payload);
	default:
		return state;
	}
}

