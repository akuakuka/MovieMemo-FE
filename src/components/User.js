import React from 'react';
import 'semantic-ui-css/semantic.min.css';
//import { Form } from 'semantic-ui-react';
const User = props => {
  console.log('usercomponentinsäläsl');
  console.log(props);
  return (
    <div className="User">
      <div>DisplayName: {props.user.displayName}</div>
    </div>
  );
};
export default User;
