//  Action Creator
export function selectBook(book) {
	//  Return object with a type property and
	//  sometimes a payload (more data to describe action)
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}
