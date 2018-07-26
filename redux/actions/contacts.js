import firestore from '../../db/firestore';

const FETCH_CONTACTS = 'fetch_contacts'
const SELECTED_CONTACT = 'selected_contact'

function fetchContacts(userId) {
	return dispatch => {
    firestore
      .collection('contacts')
      .where('userId', '==', userId)
      .get()
      .then(contacts => {
        dispatch({
          type: FETCH_CONTACTS,
          payload: contacts
        });
      })
	}
}

function createContact(contact, userId) {
	return dispatch => {
    firestore
      .collection('contacts')
      .add({
        name: contact.name,
        number: contact.phoneNumber,
        userId
      })
      .then( addedDocument => { })
      .catch( error => {})
	}
}

function selectedContact(contact) {
  return dispatch => {
    dispatch({
      type: SELECTED_CONTACT,
      payload: contact
    })
  }
}

export { FETCH_CONTACTS, fetchContacts, createContact, selectedContact, SELECTED_CONTACT }
