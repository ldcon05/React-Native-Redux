import { logOutFirebase } from '../../services/auth/firebaseAuth'
import { SIGN_IN } from './login'

function logOut() {
  return dispatch => {
    logOutFirebase()

    dispatch({
      type: SIGN_IN,
      payload: null
    })
  }
}

export { logOut }
