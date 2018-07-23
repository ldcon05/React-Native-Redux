import { firestore } from '../../db/firebase';

const FETCH_CONTACTS = 'fetch_contacts'

function fetchContacts() {
	return dispatch => {
		firestore.collection('contacts').onSnapshot( onSnapshot => {
			dispatch({
				type: FETCH_CONTACTS,
				payload: onSnapshot
		  });
		});
	}
}

export { FETCH_CONTACTS, fetchContacts }
