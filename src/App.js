import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import MovieContainer from './components/MovieContainer';
import UsersContainer from './components/UsersContainer';
import GroupContainer from './components/GroupContainer';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { initializeMovies } from './reducers/MovieReducer';
import { initializeGroups } from './reducers/GroupReducer';
import LoginContainer from './components/LoginContainer';
const App = props => {
  useEffect(() => {
    props.initializeMovies(); // eslint-disable-next-line
    props.initializeGroups(); // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Router>
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
        <Link to="/users/">Users</Link>
        <Link to="/group/">Group</Link>
        <Route path="/login/" component={LoginContainer} />
        <Route path="/" exact component={MovieContainer} />
        <Route path="/users/" component={UsersContainer} />
        <Route path="/group/" component={GroupContainer} />
      </Router>
    </div>
  );
};

export default connect(
  null,
  { initializeMovies, initializeGroups },
)(App);
