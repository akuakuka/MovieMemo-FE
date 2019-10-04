import React, { useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Icon,
} from 'semantic-ui-react';
import { register, login } from '../reducers/RegisterReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = {
  register,
  login,
};
const LocalRegister = props => {
  const [active, setActive] = useState('login');
  const handleRegister = e => {
    const reg = {
      email: e.target.email.value,
      password: e.target.password.value,
      username: e.target.username.value,
    };
    props.register(reg);
  };
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3001/auth/google';
  };
  const handleLogin = e => {
    const reg = {
      password: e.target.password.value,
      username: e.target.username.value,
    };
    props.login(reg);
  };

  const handleSwitch = a => {
    setActive(a);
  };
  const loggedInUser = props.state.register.loggedInUser;
  return (
    <div>
      {loggedInUser === null ? (
        <Grid
          textAlign="center"
          style={{ height: '100vh' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Button.Group fluid size="large">
              <Button onClick={() => handleSwitch('login')}>
                Login
              </Button>
              <Button.Or />
              <Button onClick={() => handleSwitch('register')}>
                Register
              </Button>
            </Button.Group>

            {active === 'login' ? (
              <>
                <Header as="h2" color="teal" textAlign="center">
                  Login
                </Header>
                <Form size="large" onSubmit={handleLogin}>
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="mail"
                      iconPosition="left"
                      placeholder="Username"
                      name="username"
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                      name="password"
                    />

                    <Button
                      color="teal"
                      fluid
                      size="large"
                      type="submit"
                    >
                      Login
                    </Button>
                  </Segment>
                </Form>
              </>
            ) : (
              <>
                <Header as="h2" color="teal" textAlign="center">
                  Register new account
                </Header>
                <Form size="large" onSubmit={handleRegister}>
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="Username"
                      name="username"
                    />
                    <Form.Input
                      fluid
                      icon="mail"
                      iconPosition="left"
                      placeholder="E-mail address"
                      name="email"
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                      name="password"
                    />

                    <Button
                      color="teal"
                      fluid
                      size="large"
                      type="submit"
                    >
                      Register
                    </Button>
                  </Segment>
                </Form>
              </>
            )}

            <Button
              color="google plus"
              fluid
              size="large"
              onClick={handleGoogleLogin}
            >
              Login with Google <Icon name="google" color="violet" />
            </Button>
          </Grid.Column>
        </Grid>
      ) : (
        <>
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        </>
      )}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocalRegister);
