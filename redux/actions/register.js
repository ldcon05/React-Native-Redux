import { registerUserInFirebase, logOutFirebase } from '../../services/auth/firebaseAuth'
import { SignIn } from './login'

function RegisterUser(user) {
  return dispatch => {
    registerUserInFirebase(user)
  }
}

export { RegisterUser }
