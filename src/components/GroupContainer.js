import React from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { newGroup } from '../reducers/GroupReducer';
import Group from './Group';
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = {
  newGroup,
};

const GroupContainer = props => {
  const handleCreateGroup = event => {
    console.log(event.target.group.value);
    props.newGroup(event.target.group.value);
  };
  return (
    <div className="App">
      "GROUP CONTAINER"
      {console.log(props.state)}
      <Form onSubmit={handleCreateGroup}>
        <Form.Input name="group" label="Create new Group" />
        <Form.Button>Submit</Form.Button>
      </Form>
      {props.state.groups.map(group => {
        console.log(group.groupName);
        return <Group group={group} />;
      })}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupContainer);
