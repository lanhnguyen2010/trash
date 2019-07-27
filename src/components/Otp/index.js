import {connect} from "react-redux";
import {compose} from "redux";
import {selectors, actions} from "../../redux";
import {lifecycle} from "recompose";
import React from 'react';
import {withStyles, makeStyles} from '@material-ui/styles';

import {
  withRouter
} from 'react-router-dom'

import {
  TextField,
  Button,
  Select,
  FilledInput,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText
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

  btnOtp: {
    marginTop: 30
  }
};
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    minWidth: 300,
    paddingTop:20
  },
  selectEmpty: {
  },
}));
const OtpForm = ({history, doOtp}) => {
  let phoneNumberRef = null;
  let nameRef = null;
  let birthDayRef = null;
  let emailRef = null;
  const classes = useStyles();

  const [gender, setGender] = React.useState('GioiTinh');

  const handleGenderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGender(event.target.value);
  };

  return (
    <div style={styles.container}>
      Vui Lòng Nhập Thông Tin Cá Nhân Để Nhận Thông Tin Về Chương Trình
      <TextField
        style={styles.textField}
        placeholder="Tên"
        id="name"
        inputRef={input => nameRef = input}
      />
      <FormControl variant="filled" className={classes.formControl}>
      <Select
        value={gender}
        onChange={handleGenderChange}
        input={<FilledInput name="gender" id="filled-gender-simple"/>}
      >
        <MenuItem value={"GioiTinh"} disabled>Giới Tính</MenuItem>
        <MenuItem value={"Nam"}>Nam</MenuItem>
        <MenuItem value={"Nu"}>Nữ</MenuItem>
      </Select>
      </FormControl>
      <TextField
        style={styles.textField}
        placeholder="Ngày Sinh"
        id="date"
        type="date"
        inputRef={input => birthDayRef = input}
      />
      <TextField
        style={styles.textField}
        placeholder="Số Điện Thoại"
        id="phoneNumber"
        inputRef={input => phoneNumberRef = input}
      />
      <TextField
        style={styles.textField}
        placeholder="Email"
        id="email"
        inputRef={input => emailRef = input}
      />
      <Button onClick={() => {
        doOtp(history, {
          phoneNumber: phoneNumberRef.value,
          name: nameRef.value,
          gender: gender,
          birthDay: birthDayRef.value,
          email: emailRef.value,
        });
      }}
              style={styles.btnOtp}>Xác Thực</Button>
    </div>)
};

const Otp = withRouter(withStyles(styles)(OtpForm));

const OtpContainer = compose(
  connect(
    selectors.root,
    {
      doOtp: actions.doOtp
    }
  ),
  lifecycle({})
)(Otp);

export default OtpContainer;