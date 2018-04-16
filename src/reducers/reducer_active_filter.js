export default function(state = 'select', action) {
	switch (action.type) {
		case 'FILTER_SELECTED': 
			return action.payload
	}
	return state
}