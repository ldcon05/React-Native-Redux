import { logOutFirebase } from '../../services/auth/firebaseAuth'
import { SIGN_IN } from './login'
const SIGN_IN = 'sign_in'

function LogOut() {
  return dispatch => {
    logOutFirebase()

    dispatch({
      type: SIGN_IN,
      payload: {}
    })
  }
}

export { LogOut }
