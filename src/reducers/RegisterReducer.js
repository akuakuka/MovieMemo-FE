import UserService from '../services/UserService.js';
const initState = { loggedInUser: null };
const RegisterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REGISTER':
      let newState = { loggedInUser: action.data };
      return newState;
    case 'LOGIN':
      let newLoginState = { loggedInUser: action.data };
      return newLoginState;
    case 'GOOGLELOGIN':
      let newGoogleState = { loggedInUser: action.data };
      return newGoogleState;
    default:
      return state;
  }
};

export const register = regg => {
  return async dispatch => {
    const reg = await UserService.localRegister(regg);
    dispatch({
      type: 'REGISTER',
      data: reg,
    });
  };
};
export const googleLogin = () => {
  return async dispatch => {
    const usr = await UserService.getMe();
    console.log(usr);
    dispatch({
      type: 'GOOGLELOGIN',
      data: usr,
    });
  };
};

export const login = logg => {
  return async dispatch => {
    const log = await UserService.localLogin(logg);
    dispatch({
      type: 'LOGIN',
      data: log,
    });
  };
};
export default RegisterReducer;
