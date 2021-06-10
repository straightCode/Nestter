import { LOGIN_SUCCESS, SET_USER } from "../actions/auth-actions";

const initalState = {
  isLoggedIn: false,
  user: {},
  token: null,
}

const auth = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: !!action.payload,
      }
    case SET_USER:
      return {
        ...state,
        user: {...action.payload},
      }
    }
  return state;
}
export default auth;

