import firebase from '../../db/firebase';

const signInFirebase =  (user) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .catch( error => { } );
}

const registerUserInFirebase = (user) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .catch( error => { } );
}

const checkUserFirebase = () => firebase.auth().currentUser

const logOutFirebase = () => {
  firebase
    .auth()
    .signOut()
    .then( () => true )
    .catch( error => false)
}

export {registerUserInFirebase, signInFirebase, checkUserFirebase, logOutFirebase}
