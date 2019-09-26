import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import MovieContainer from './components/MovieContainer';
import UsersContainer from './components/UsersContainer';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { initializeMovies } from './reducers/MovieReducer';
import LoginContainer from './components/LoginContainer';
const App = props => {
  useEffect(() => {
    props.initializeMovies();
  }, []);

  return (
    <div className="App">
      <Router>
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
        <Link to="/users/">Users</Link>
        <Route path="/login/" component={LoginContainer} />
        <Route path="/" exact component={MovieContainer} />
        <Route path="/users/" component={UsersContainer} />
      </Router>
    </div>
  );
};

export default connect(
  null,
  { initializeMovies },
)(App);
