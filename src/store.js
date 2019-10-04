import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import MovieReducer from './reducers/MovieReducer';
import UserReducer from './reducers/UserReducer';
import MovieSearchReducer from './reducers/MovieSearchReducer';
import UserSearchReducer from './reducers/UserSearchReducer';
import GroupReducer from './reducers/GroupReducer';
import RegisterReducer from './reducers/RegisterReducer';

const reducer = combineReducers({
  movies: MovieReducer,
  users: UserReducer,
  movieSearch: MovieSearchReducer,
  userSearch: UserSearchReducer,
  groups: GroupReducer,
  register: RegisterReducer,
});
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
