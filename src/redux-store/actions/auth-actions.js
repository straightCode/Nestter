const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const SET_USER = 'SET_USER';

const loginAction = (email, password) => {
  return dispatch => {
    return fetch(`http://qich.app/api/auth/signin`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email, password,
      })
    }).then(e => e.json).then(e => {
        dispatch({type: LOGIN_SUCCESS, payload: e})
    })
  }
}
const setUserAction = payload => {
  return {
    type: SET_USER,
    payload,
  }
}

export {
  LOGIN_SUCCESS,
  SET_USER,
  loginAction,
  setUserAction,
}