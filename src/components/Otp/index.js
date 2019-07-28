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
  FormControl,
  OutlinedInput
} from '@material-ui/core';
import * as ROUTES from "../../constants/routes";


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
    paddingTop: 20
  },
  selectEmpty: {},
}));
const OtpForm = ({history, doOtp, city}) => {
  let phoneNumberRef = null;
  let nameRef = null;
  let birthDayRef = null;
  let emailRef = null;
  const classes = useStyles();

  console.log(city);

  const [gender, setGender] = React.useState('GioiTinh');

  const handleGenderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGender(event.target.value);
  };

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(0);
  }, []);

  return (
    <div style={styles.container}>
      Vui lòng nhập thông tin cá nhân để nhận thông tin về chương trình
      <TextField
        style={styles.textField}
        placeholder="Tên"
        id="name"
        variant="outlined"
        inputRef={input => nameRef = input}
      />
      <FormControl variant="filled" className={classes.formControl}>
        <Select
          value={gender}
          onChange={handleGenderChange}
          variant="outlined"
          input={<OutlinedInput labelWidth={labelWidth} name="gender" id="filled-gender-simple"/>}
        >
          <MenuItem value={"GioiTinh"} disabled>Giới Tính</MenuItem>
          <MenuItem value={"Nam"}>Nam</MenuItem>
          <MenuItem value={"Nu"}>Nữ</MenuItem>
        </Select>
      </FormControl>
      <TextField
        style={styles.textField}
        placeholder="Ngày Sinh"
        type="date"
        variant="outlined"
        helperText=""
        inputRef={input => birthDayRef = input}
      />
      <TextField
        style={styles.textField}
        placeholder="Số Điện Thoại"
        variant="outlined"
        id="phoneNumber"
        inputRef={input => phoneNumberRef = input}
      />
      <TextField
        style={styles.textField}
        placeholder="Email"
        variant="outlined"
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
          city: city
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
  lifecycle({
    componentWillMount() {
      const {history, isLoggedIn} = this.props;
      if (!isLoggedIn) {
        history.push(ROUTES.LOG_IN)
      }
    }
  })
)(Otp);

export default OtpContainer;
