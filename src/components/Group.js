import React from 'react';
import { Item } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
const Group = props => {
  console.log('GROUPIN SISÖL');
  console.log(props);
  return (
    <div className="Group">
      <Item>
        <Item.Content verticalAlign="middle">
          Käyttäjiä groupissa: {props.group.Users.length}
          <Item.Header as="a" content={props.group.groupName} />
        </Item.Content>
      </Item>
    </div>
  );
};
export default Group;
