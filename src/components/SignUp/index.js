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
  Button,
  InputLabel,
  Select,
  FilledInput,
  MenuItem
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

  btnSignUp: {
    marginTop: 30
  }
};

const SignUpForm = ({history, doSignUp}) => {
  let usernameRef = null;
  let passwordRef = null;
  let confirmPasswordRef = null;
  const [city, setCity] = React.useState('Ho Chi Minh');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value);
  };
  return (
    <div style={styles.container}>
      <h1>Đăng Kí Tài Khoản</h1>
      <InputLabel htmlFor="age-simple">Thành Phố</InputLabel>
      <Select
        value={city}
        onChange={handleChange}
        input={<FilledInput name="city" id="filled-city-simple"/>}
      >
        <MenuItem value={"Ha Noi"}>Hà Nội</MenuItem>
        <MenuItem value={"Ho Chi Minh"}>Hồ Chí Minh</MenuItem>
        <MenuItem value={"Da Nang"}>Đà Nẵng</MenuItem>
      </Select>
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

      <TextField
        style={styles.textField}
        required={true}
        label="Confirm Password"
        id="confirmPassword"
        type="password"
        inputRef={input => confirmPasswordRef = input}
      />
      <Button onClick={() => {
        doSignUp(history, usernameRef.value, passwordRef.value, confirmPasswordRef.value, city);
      }}
              style={styles.btnSignUp}>SignUp</Button>
    </div>)
};

const SignUp =withRouter(withStyles(styles)(SignUpForm));

const SignUpContainer = compose(
  connect(
    selectors.root,
    {
      doSignUp: actions.doSignUp
    }
  ),
  lifecycle({})
)(SignUp);

export default SignUpContainer;
