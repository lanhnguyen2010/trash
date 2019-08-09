import {connect} from "react-redux";
import {compose} from "redux";
import {actions, selectors} from "../../redux";
import {lifecycle} from "recompose";
import React from 'react';
import {makeStyles, withStyles} from '@material-ui/styles';

import {withRouter} from 'react-router-dom'

import {
  Button, MenuItem, OutlinedInput, Select, TextField,
  Dialog, DialogTitle, DialogActions, Checkbox,
  FormControlLabel
} from '@material-ui/core';
import * as ROUTES from "../../constants/routes";
import commonStyles, {fonts, colors} from "../common"


const styles = {
  main: {
    backgroundImage: "url('./images/background_global.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    minHeight: '100%'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 40
  },

  textField: {
    ...commonStyles.textNormal_bold,
    textAlign: 'left',
    marginTop: '3vh',
    minWidth: '70%',
    minHeight: 70,
    borderColor: colors.pruGrey,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 100
  },

  text: {
    ...commonStyles.textNormal_bold,
    fontSize: '3.5vh',
    color: colors.pruRed,
    width: '70%',
    paddingTop: "10vh",
    textAlign: 'center',
    paddingLeft: '15%'
  },

  btnOtp: {
    position: "relative",
    alignSelf: "center",
    fontSize: 18,
    borderRadius: "50px",
    color: 'white',
    minWidth: 200,
    minHeight: 50,
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

const fieldMap = {
  phoneNumber: "Số Điện Thoại",
  email: "Email",
  name: "Tên",
  birthDay: 'Ngày Sinh',
  gender: 'Giới Tính'
}
const OtpForm = ({
                   history, doOtp, city, checkIsPhoneNumberExist, isPhoneNumberExist, updateIsPhoneNumberExist,
                   updateBtn, bntDisable, isDoingOtp
                 }) => {
  let phoneNumberRef = null;
  let nameRef = null;
  let birthDayRef = null;
  let emailRef = null;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState([]);

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

  function handleClickOpen() {
    let data = {
      phoneNumber: phoneNumberRef ? phoneNumberRef.value : '',
      name: nameRef ? nameRef.value : '',
      gender: gender,
      birthDay: birthDayRef ? birthDayRef.value : '',
      // email: emailRef ? emailRef.value : '',
      city: city,
      time: new Date().toLocaleString()
    };
    let invalidField = [];
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        console.log(key + " -> " + data[key]);
        if (!data[key]) {
          invalidField.push(fieldMap[key]);
        }
      }
    }
    if (invalidField.length > 0) {
      setErrorMessage("Vui Lòng Nhập " + invalidField.join(', '));
      setOpen(true);
    } else {
      checkIsPhoneNumberExist(phoneNumberRef.value, data, history);
    }
  }

  function handleClose() {
    updateIsPhoneNumberExist(false)
  }

  function handlePopupClose() {
    setOpen(false)
  }

  return (
    <div style={{...commonStyles.container, ...styles.main}}>
      <div style={styles.text}> Vui lòng nhập thông tin cá nhân của bạn</div>
      <div style={styles.container}>
        <TextField
          style={styles.textField}
          placeholder="Tên*"
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
          <MenuItem value={"GioiTinh"} disabled>Giới Tính*</MenuItem>
          <MenuItem value={"Nam"}>Nam</MenuItem>
          <MenuItem value={"Nu"}>Nữ</MenuItem>
        </Select>
        <TextField
          className='info'
          style={styles.textField}
          placeholder="Ngày Sinh*"
          variant="outlined"
          helperText=""
          inputRef={input => birthDayRef = input}
        />
        <TextField
          className='info'
          style={styles.textField}
          placeholder="Số Điện Thoại*"
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

        <div style={{flexDirection:'row', display:'flex', justifyContent: 'center', alignItems:'center', marginTop: '3vh'}}>
          <Checkbox
            onChange={(event, checked) => {
              updateBtn(!checked)
            }}
          >Tôi đồng ý với Chính sách bảo mật của Prudential Việt Nam</Checkbox>
          <div style={{fontSize: '2vh'}}>Tôi đồng ý với <a style={{color: colors.pruRed}} href={"https://www.prudential.com.vn/vi/footer/privacy-policy/"}>Chính sách bảo mật của Prudential Việt Nam</a></div>
        </div>

        <Button onClick={handleClickOpen}
                disabled={bntDisable || isDoingOtp}
                style={{
                  ...commonStyles.bottomButton, marginTop: '10vh',
                  background: (bntDisable || isDoingOtp) ? 'rgba(237, 27, 46, 0.5)' : colors.pruRed
                }}>
          Tiếp Tục
        </Button>

      </div>
      <Dialog
        open={isPhoneNumberExist}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Số Điện Thoại Đã Tồn Tại</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Thoát
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open}
        keepMounted
        onClose={handlePopupClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{errorMessage}</DialogTitle>
        <DialogActions>
          <Button onClick={handlePopupClose} color="primary">
            Thoát
          </Button>
        </DialogActions>
      </Dialog>
    </div>)
};

const Otp = withRouter(withStyles(styles)(OtpForm));

const OtpContainer = compose(
  connect(
    selectors.root,
    {
      doOtp: actions.doOtp,
      checkIsPhoneNumberExist: actions.checkIsPhoneNumberExist,
      updateIsPhoneNumberExist: actions.updateIsPhoneNumberExist,
      updateDoingOtp: actions.updateDoingOtp,
      endFlow: actions.endFlow
    }
  ),
  lifecycle({
    componentWillMount() {
      const {history, isLoggedIn, endFlow} = this.props;
      if (!isLoggedIn) {
        history.push(ROUTES.LOG_IN)
      }
      endFlow();

      this.setState({
        bntDisable: true, updateBtn: (value) => {
          this.setState({...this.props.state, bntDisable: value})
        }
      });
    },
    componentDidMount() {
      const {history, updateDoingOtp} = this.props;
      updateDoingOtp(false);
    }
  })
)(Otp);

export default OtpContainer;
