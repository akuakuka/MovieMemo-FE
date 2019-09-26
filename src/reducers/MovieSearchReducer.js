import MovieService from '../services/MovieService.js';

const MovieSearchReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES':
      console.log('SEARCH_MVOEIS');
      console.log(action.data);
      return action.data;
    default:
      return state;
  }
};

export const searchMovie = title => {
  return async dispatch => {
    const searchResult = await MovieService.searchForMovie(title);
    console.log(searchResult);
    dispatch({
      type: 'SEARCH_MOVIES',
      data: searchResult,
    });
  };
};

export default MovieSearchReducer;
