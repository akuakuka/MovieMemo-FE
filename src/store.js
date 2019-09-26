import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import MovieReducer from './reducers/MovieReducer';
import UserReducer from './reducers/UserReducer';
import MovieSearchReducer from './reducers/MovieSearchReducer';
import UserSearchReducer from './reducers/UserSearchReducer';
const reducer = combineReducers({
  movies: MovieReducer,
  users: UserReducer,
  movieSearch: MovieSearchReducer,
  userSearch: UserSearchReducer,
});
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
