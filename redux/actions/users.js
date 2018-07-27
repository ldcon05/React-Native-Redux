import { registerUserInFirebase, signInFirebase, logOutFirebase } from '../../services/auth/firebaseAuth'

const SIGN_IN = 'sign_in'

function RegisterUser(user) {
  return async dispatch => {

    try {
      const createdUser = await registerUserInFirebase(user)
      const loggedUser = await signInFirebase({email:createdUser.user.email, password:user.password})
      dispatchRequest(dispatch, SIGN_IN, loggedUser)
    } catch (error) {}
  }
}

function SignIn(user) {
  return  async dispatch => {
    try {
      const loggedUser = await signInFirebase(user)
      dispatchRequest(dispatch, SIGN_IN, loggedUser)
    } catch (error) {
      dispatchRequest(dispatch, SIGN_IN, { validation : true})
    }
  }
}

function logOut() {
  return async dispatch => {
    try {
      await logOutFirebase()
      dispatchRequest(dispatch, SIGN_IN, null)
    } catch (error) {}
  }
}

function dispatchRequest(dispatch,state, payload) {
  dispatch({
    type: state,
    payload: payload
  })
}

export { RegisterUser, SignIn, logOut, SIGN_IN }
