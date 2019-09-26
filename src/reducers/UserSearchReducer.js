import UserService from '../services/UserService.js';

const UserSearchReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_USERS':
      console.log('SEARCH_USERS');
      console.log(action.data);
      return action.data;
    default:
      return state;
  }
};

export const searchUser = user => {
  return async dispatch => {
    const searchResult = await UserService.searchForUsers(user);
    console.log(searchResult);
    dispatch({
      type: 'SEARCH_USERS',
      data: searchResult,
    });
  };
};

export default UserSearchReducer;
