import firebase from 'firebase';
import 'firebase/firestore'

const firebaseSettings = {
  apiKey: "AIzaSyB53YKna0uvr7-RtODZPBiGCQMtkGPzuYA",
  authDomain: "phonebook-b7f6f.firebaseapp.com",
  projectId: "phonebook-b7f6f",
};

const firestoreSettings = {
	timestampsInSnapshots: true,
}

firebase.initializeApp(firebaseSettings);

const firestore = firebase.firestore();
firestore.settings(firestoreSettings);

export {firebase, firestore}
