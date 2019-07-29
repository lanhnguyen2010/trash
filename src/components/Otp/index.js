import {connect} from "react-redux";
import {compose} from "redux";
import {actions, selectors} from "../../redux";
import {lifecycle} from "recompose";
import React from 'react';
import {makeStyles, withStyles} from '@material-ui/styles';

import {withRouter} from 'react-router-dom'

import {Button, MenuItem, OutlinedInput, Select, TextField} from '@material-ui/core';
import * as ROUTES from "../../constants/routes";


const styles = {
  main: {
    backgroundImage: "url('./images/player_info_background.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 40
  },

  textField: {
    marginTop: 30,
    minWidth: 350,
    minHeight: 70
  },

  text: {
    fontSize: 33,
    color: 'white',
    width: '70%',
    paddingTop: 50,
    textAlign: 'center',
    paddingLeft: '15%'
  },

  btnOtp: {
    position:"fixed",
    bottom:"7%",
    alignSelf: "center",
    backgroundColor: '#D20C08',
    fontSize: 18,
    borderRadius: "50px",
    color: 'white',
    minWidth: 200,
    minHeight: 50
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
    <div style={styles.main}>
      <div style={styles.text}> Vui lòng nhập thông tin cá nhân để nhận thông tin về chương trình</div>
      <div style={styles.container}>
        <TextField
          style={styles.textField}
          placeholder="Tên"
          id="name"
          variant="outlined"
          className='info'
          inputRef={input => nameRef = input}
        />
        <Select
          className='info'
          style={styles.textField}
          value={gender}
          onChange={handleGenderChange}
          variant="outlined"
          input={<OutlinedInput labelWidth={labelWidth} name="gender" id="gender"/>}
        >
          <MenuItem value={"GioiTinh"} disabled>Giới Tính</MenuItem>
          <MenuItem value={"Nam"}>Nam</MenuItem>
          <MenuItem value={"Nu"}>Nữ</MenuItem>
        </Select>
        <TextField
          className='info'
          style={styles.textField}
          placeholder="Ngày Sinh"
          variant="outlined"
          helperText=""
          inputRef={input => birthDayRef = input}
        />
        <TextField
          className='info'
          style={styles.textField}
          placeholder="Số Điện Thoại"
          variant="outlined"
          id="phoneNumber"
          inputRef={input => phoneNumberRef = input}
        />
        <TextField
          className='info'
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
                style={styles.btnOtp}>Tiếp Tục</Button>
      </div>
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
