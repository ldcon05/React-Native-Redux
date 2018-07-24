import { SELECTED_CONTACT } from '../actions/contacts';

export default function (state = [], action) {
	switch(action.type) {
    case SELECTED_CONTACT:
      return action.payload
	}

	return state
}
