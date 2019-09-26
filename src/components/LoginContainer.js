import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';

const LoginContainer = props => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:3001/auth/google';
  };
  return (
    <div className="LoginContainer">
      <div>
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
};
export default LoginContainer;
