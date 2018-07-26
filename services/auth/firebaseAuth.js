import firebase from '../../db/firebase';

const signInFirebase = (user) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)

}

const registerUserInFirebase = (user) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
}

const checkUserFirebase = () => firebase.auth().currentUser

const logOutFirebase = () => {
  firebase
    .auth()
    .signOut()
    .then( () => {} )
    .catch( error => {})
}

export {registerUserInFirebase, signInFirebase, checkUserFirebase, logOutFirebase}
