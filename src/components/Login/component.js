import React from 'react';
import { withStyles } from '@material-ui/styles';
import {
  TextField
} from '@material-ui/core';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },

  textField: {

  }
};

const Login = () => (
  <div style={styles.container}>
    Đăng nhập
    <TextField
      required={true}
      label="Username"
      id="username"
    />

    <TextField
      required={true}
      label="Password"
      id="password"
      type="password"

    />


  </div>
);

export default withStyles(styles)(Login);