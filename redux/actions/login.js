import { signInFirebase, checkUserFirebase } from '../../services/auth/firebaseAuth'

const SIGN_IN = 'sign_in'

function SignIn(user) {
  return dispatch => {
    signInFirebase(user)
    const loggedUser = checkUserFirebase() ;

    dispatch({
      type: SIGN_IN,
      payload: (loggedUser.uid) ? loggedUser : {}
    })
  }
}

export { SIGN_IN, SignIn }
