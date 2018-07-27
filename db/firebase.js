import firebase from 'firebase';

const firebaseSettings = {
  apiKey: "AIzaSyBBb4RkrI8UkQO2hSjQY97nXh8JEn6YPc0",
  authDomain: "phonebooks-6e767.firebaseapp.com",
  databaseURL: "https://phonebooks-6e767.firebaseio.com",
  projectId: "phonebooks-6e767",
  storageBucket: "phonebooks-6e767.appspot.com",
  messagingSenderId: "434190975271"
};

firebase.initializeApp(firebaseSettings);

export default firebase;
