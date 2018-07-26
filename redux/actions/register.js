import { registerUserInFirebase, signInFirebase } from '../../services/auth/firebaseAuth'
import { SIGN_IN } from './login'

function RegisterUser(user) {
  return dispatch => {
    registerUserInFirebase(user)
      .then(createdUser => {
        signInFirebase({email:createdUser.user.email, password:user.password})
          .then( loggedUser => {
            dispatch({
              type: SIGN_IN,
              payload: loggedUser
            })
          })
          .catch(error => {})
      })
      .catch(error => {})
  }
}

export { RegisterUser }
