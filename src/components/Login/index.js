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
import * as ROUTES from "../../constants/routes";
import {colors} from "../common";
import commonStyle from "../common";


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  },

  textField: {
    marginTop: 20,
    minWidth: 300
  },

  btnLogin: {
    color: 'white',
    marginTop: 30
  }
};

const LoginForm = ({history, doLogin, isLogging}) => {
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
      <Button
        disabled={isLogging}
        onClick={() => {
        doLogin(history, usernameRef.value, passwordRef.value);
      }}
      style={{...styles.btnLogin,
          background: (isLogging) ? 'rgba(237, 27, 46, 0.5)' : colors.pruRed}}>Login</Button>
    </div>)
};

const Login =withRouter(withStyles(styles)(LoginForm));

const LoginContainer = compose(
  connect(
    selectors.root,
    {
      doLogin: actions.doLogin,
      updateLoggingIn: actions.updateLoggingIn
    }
  ),
  lifecycle({
    componentDidMount() {
      const {history, isLoggedIn} = this.props;
      if(isLoggedIn){
        history.push(ROUTES.HOME)
      }
      else {
        history.push(ROUTES.LOG_IN)
      }
    }
  })
)(Login);

export default LoginContainer;
