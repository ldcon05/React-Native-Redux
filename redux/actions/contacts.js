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

function updateContact(documentId, values) {
  return async  dispatch => {
    await firestore
      .collection('contacts')
      .doc(documentId)
      .update({
        name: values.name,
        number: values.phoneNumber
      })

    const updatedDocument = await firestore
      .collection('contacts')
      .doc(documentId)
      .get()

    dispatch({
      type: SELECTED_CONTACT,
      payload: updatedDocument
    })

  }
}

function deleteContact(documentId){
  return dispatch => {
    firestore
      .collection('contacts')
      .doc(documentId)
      .delete()
      .then( removedDocument => { })
      .catch( error => {})
  }
}

export { FETCH_CONTACTS, fetchContacts, createContact, selectedContact, SELECTED_CONTACT, updateContact, deleteContact }
