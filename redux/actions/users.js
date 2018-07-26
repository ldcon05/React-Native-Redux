import { registerUserInFirebase, signInFirebase, logOutFirebase } from '../../services/auth/firebaseAuth'

const SIGN_IN = 'sign_in'

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

function logOut() {
  return dispatch => {
    logOutFirebase()

    dispatch({
      type: SIGN_IN,
      payload: null
    })
  }
}

export { RegisterUser, SignIn, logOut, SIGN_IN }
