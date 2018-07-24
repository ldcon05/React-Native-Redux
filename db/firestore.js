import firebase from './firebase';
import 'firebase/firestore'

const firestoreSettings = {
	timestampsInSnapshots: true,
}

const firestore = firebase.firestore();
firestore.settings(firestoreSettings);

export default firestore
