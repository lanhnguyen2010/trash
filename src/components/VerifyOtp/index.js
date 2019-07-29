import {connect} from "react-redux";
import {compose} from "redux";
import {actions, selectors} from "../../redux";
import {lifecycle} from "recompose";
import React from 'react';
import {withStyles} from '@material-ui/styles';
import ReactCodeInput from 'react-code-input';

import {withRouter} from 'react-router-dom'
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
    padding: 50
  },

  textField: {
    marginTop: 20,
    minWidth: 300
  },

  btnVerifyOtp: {
    marginTop: 30
  },
  text: {
    fontSize: 33,
    color: 'white',
    width: '70%',
    paddingTop: 70,
    textAlign: 'center',
    marginBottom:40
  },
};

const props = {
  inputStyle: {
    fontFamily: 'monospace',
    margin: 8,
    MozAppearance: 'textfield',
    width: 70,
    borderRadius: "15px !important",
    fontSize: '14px',
    height: 104,
    color: 'lightskyblue',
    border: '2px solid lightskyblue',
  },
  inputStyleInvalid: {
    fontFamily: 'monospace',
    margin: '4px',
    MozAppearance: 'textfield',
    width: '20px',
    borderRadius: '3px',
    fontSize: '14px',
    height: '30px',
    color: 'red',
    border: '1px solid red'
  }
}

const VerifyOtpForm = ({history, doVerifyOtp, phoneNumber, city}) => {
  let otpRef = null;
  console.log(phoneNumber);

  function handleOtpChange(otp) {
    console.log(otp);
    if (otp.length == 4) {
      doVerifyOtp(history, phoneNumber, otp)
    }
  }

  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <div style={styles.text}>Vui lòng nhập mã OTP để xác nhận</div>
        <ReactCodeInput className="otp" fields={4} {...props} onChange={handleOtpChange}/>
      </div>
    </div>)
};

const VerifyOtp = withStyles(styles)(VerifyOtpForm);

const VerifyOtpContainer = compose(
  connect(
    selectors.root,
    {
      doVerifyOtp: actions.doVerifyOtp
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
)(VerifyOtp);

export default VerifyOtpContainer;
