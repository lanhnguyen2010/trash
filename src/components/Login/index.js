import {connect} from "react-redux";
import {compose} from "redux";
import {selectors, actions} from "../../redux";
import {lifecycle} from "recompose";
import React from 'react';
import {withStyles} from '@material-ui/styles';

import {
  withRouter
} from 'react-router-dom'

import {
  TextField,
  Button
} from '@material-ui/core';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50
  },

  textField: {
    marginTop: 20,
    minWidth: 300
  },

  btnLogin: {
    marginTop: 30
  }
};

const LoginForm = ({history, doLogin}) => {
  let usernameRef = null;
  let passwordRef = null;
  return (
    <div style={styles.container}>
      ĐĂNG NHẬP
      <TextField
        style={styles.textField}
        required={true}
        label="Username"
        id="username"
        inputRef={input => usernameRef = input}
      />

      <TextField
        style={styles.textField}
        required={true}
        label="Password"
        id="password"
        type="password"
        inputRef={input => passwordRef = input}
      />
      <Button onClick={() => {
        doLogin(history, usernameRef.value, passwordRef.value);
      }}
      style={styles.btnLogin}>Login</Button>
    </div>)
};

const Login =withRouter(withStyles(styles)(LoginForm));

const LoginContainer = compose(
  connect(
    selectors.root,
    {
      doLogin: actions.doLogin
    }
  ),
  lifecycle({})
)(Login);

export default LoginContainer;
