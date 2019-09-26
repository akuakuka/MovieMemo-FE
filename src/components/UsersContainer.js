import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form } from 'semantic-ui-react';
import { searchUser } from '../reducers/UserSearchReducer';
import { connect } from 'react-redux';
import User from './User';
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = {
  searchUser,
};
const UsersContainer = props => {
  const handleSearch = async event => {
    console.log(event.target.user.value);
    event.preventDefault();

    const result = await props.searchUser(event.target.user.value);
    console.log(result);
    console.log(props.state);
  };
  return (
    <div className="UserContainer">
      <Form onSubmit={handleSearch}>
        <Form.Input name="user" label="Search for users" />
        <Form.Button>Submit</Form.Button>
      </Form>
      {props.state.userSearch.map(user => {
        console.log(user);
        return <User key={user._id} user={user} />;
      })}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersContainer);
