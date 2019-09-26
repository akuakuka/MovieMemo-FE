import MovieService from '../services/MovieService.js';

const MovieReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_MOVIE':
      return [...state, action.data];
    case 'REMOVE_MOVIE':
      console.log('REMOVE_NOTE TODO!!!!!!!');
      return [...state, action.data];
    case 'INIT_MOVIES':
      console.log(action.data);
      return action.data;
    default:
      return state;
  }
};

export const initializeMovies = () => {
  return async dispatch => {
    const movies = await MovieService.getMyMovies();
    dispatch({
      type: 'INIT_MOVIES',
      data: movies,
    });
  };
};
export const newMovie = content => {
  return async dispatch => {
    const newMovie = await MovieService.saveToMyMovies(content);
    dispatch({
      type: 'NEW_MOVIE',
      data: newMovie,
    });
  };
};
export default MovieReducer;
