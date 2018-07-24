import { FETCH_CONTACTS, SELECTED_CONTACT } from '../actions/contacts';

export default function (state = [], action) {
	switch(action.type) {
		case FETCH_CONTACTS:
      return action.payload
	}

	return state
}
