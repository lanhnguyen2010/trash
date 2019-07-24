import React from 'react';
import {withStyles} from '@material-ui/styles';
import {
  TextField,
  Button
} from '@material-ui/core';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },

  textField: {}
};

const Login = ({doLogin}) => {
  let usernameRef = null;
  let passwordRef = null;
  return (
    <div style={styles.container}>
      Đăng nhập
      <TextField
        required={true}
        label="Username"
        id="username"
        inputRef={input => usernameRef = input}
      />

      <TextField
        required={true}
        label="Password"
        id="password"
        type="password"
        inputRef={input => passwordRef = input}
      />
      <Button onClick={() => {
        doLogin(usernameRef.value, passwordRef.value);
      }}>Login</Button>
    </div>)
};

export default withStyles(styles)(Login);