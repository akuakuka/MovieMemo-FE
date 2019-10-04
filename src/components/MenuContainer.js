import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    state,
  };
};
// const friendOptions = [
//   {
//     key: 'Jenny Hess',
//     text: 'Jenny Hess',
//     value: 'Jenny Hess',
//     image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
//   }
const mapStateToDropDown = arr => {
  const arrofobjects = arr.map(kk => {
    return {
      key: kk._id,
      text: kk.groupName,
      value: kk.groupName,
    };
  });
  console.log(arrofobjects);
  return arrofobjects;
};
const mapDispatchToProps = {};
const MenuContainer = props => {
  //const groups = props.state.register.loggedInUser.groups;
  return (
    <Menu inverted fixed="top">
      <Menu.Item name="Register" as={Link} to="/" />
      <Menu.Item name="Movies" as={Link} to="/movies" />
      <Menu.Item name="Users" as={Link} to="/users" />
      <Menu.Item name="Group" as={Link} to="/group" />
      <Menu.Item position="right">
        {props.state.register.loggedInUser !== null ? (
          <Dropdown
            placeholder="Select Group"
            selection
            options={mapStateToDropDown(
              props.state.register.loggedInUser.groups,
            )}
          />
        ) : (
          <div>lasdfjk</div>
        )}
      </Menu.Item>
    </Menu>
  );
};
//<Menu.Item as={Link} to='/home' />
{
  /* <Link to="/">LocalRegister</Link>
<Link to="/movies">Mvies</Link>
<Link to="/users/">Users</Link>
<Link to="/group/">Group</Link> */
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContainer);
