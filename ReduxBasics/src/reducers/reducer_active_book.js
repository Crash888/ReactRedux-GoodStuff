//  State object is  the state that reducer is
//  responsible for
export default function(state = null, action) {
	switch (action.type) {
	case 'BOOK_SELECTED':
		//  Return book that is selected
		return action.payload;
	}

	//  Do not care about the action that happened
	//  Just return the same state
	return state
}