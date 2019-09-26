//import MovieService from '../services/MovieService.js';
import UserService from '../services/UserService.js';

const UserReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      console.log('ÄDDFREND');
      return [...state, action.data];
    case 'REMOVE_FRIEND':
      console.log('REMOVEFREND');
      return 'dadsfaf';
    case 'INIT_FRIENDS':
      return action.data;
    default:
      return state;
  }
};

export const initializeMovies = () => {
  return async dispatch => {
    const movies = await UserService.getMyFriends();
    dispatch({
      type: 'INIT_FRIENDS',
      data: movies,
    });
  };
};

export default UserReducer;
