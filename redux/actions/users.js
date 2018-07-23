import { firebase } from '../../db/firebase';

const SIGN_IN = 'sign_in'

function SignIn(user) {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .catch( error => error );

    firebase
      .auth()
      .onAuthStateChanged( user => {
        console.log(user)
        if(user) {
          dispatch({
            type: SIGN_IN,
				    payload: user
          })
        }else {
          dispatch({
            type: SIGN_IN,
				    payload: {}
          })
        }
      });
  }
}

export { SIGN_IN, SignIn }
