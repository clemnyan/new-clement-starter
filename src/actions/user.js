import { firebaseAuth } from '../Firebase';

export const ActionTypes = {
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signupUser(email, password) {
  return (dispatch) => {
    firebaseAuth.createUserWithEmailAndPassword(email, password).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER, payload: true });
    }).catch((error) => {
      dispatch(authError(error.message));
    });
  };
}
