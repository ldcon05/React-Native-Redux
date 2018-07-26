import { signInFirebase } from '../../services/auth/firebaseAuth'

const SIGN_IN = 'sign_in'

function SignIn(user) {
  return  dispatch => {
    signInFirebase(user)
      .then(logged => {
        dispatch({
          type: SIGN_IN,
          payload: logged
        })
      })
      .catch(error => {
        dispatch({
          type: SIGN_IN,
          payload: {
            validation: true
          }
        })
      })
  }
}


export { SIGN_IN, SignIn }
