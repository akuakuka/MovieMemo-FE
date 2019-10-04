import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import MovieContainer from './components/MovieContainer';
import UsersContainer from './components/UsersContainer';
import GroupContainer from './components/GroupContainer';
import SideBar from './components/SideBar';
import MenuContainer from './components/MenuContainer';
import { Button } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { initializeMovies } from './reducers/MovieReducer';
import { initializeGroups } from './reducers/GroupReducer';
import LocalRegister from './components/LocalRegister';
import {
  register,
  login,
  googleLogin,
} from './reducers/RegisterReducer';
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = {
  initializeMovies,
  initializeGroups,
  googleLogin,
};
const getCurrentUrl = () => {
  return window.location.pathname;
};

const App = props => {
  const usr = props.state.register.loggedInUser;
  useEffect(() => {
    props.initializeMovies(); // eslint-disable-next-line
    props.initializeGroups(); // eslint-disable-next-line
    if (getCurrentUrl() === '/GoogleAuthRedirect') {
      // eslint-disable-next-line
      console.log('GOOGLE AUTH URL ');
      //   googleLogin(); // eslint-disable-next-line
      props.googleLogin();
      // <Redirect to={{ pathname: '/' }} />;
    }
    // eslint-disable-next-line
  }, []); // eslint-disable-next-line

  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        usr !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    />
  );
  return (
    <div className="App">
      <Router>
        <MenuContainer></MenuContainer>
        <SideBar />
        <Link to="/">LocalRegister</Link>
        <Link to="/movies">Mvies</Link>
        <Link to="/users/">Users</Link>
        <Link to="/group/">Group</Link>
        <Route path="/" component={LocalRegister} />
        <ProtectedRoute path="/group" component={GroupContainer} />
        <ProtectedRoute path="/users" component={UsersContainer} />
        <ProtectedRoute path="/movies" component={MovieContainer} />
      </Router>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
