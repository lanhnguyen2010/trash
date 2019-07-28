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
  }
};

const props = {
  inputStyle: {
    fontFamily: 'monospace',
    margin: '4px',
    MozAppearance: 'textfield',
    width: '20px',
    borderRadius: '3px',
    fontSize: '14px',
    height: '30px',
    paddingLeft: '7px',
    color: 'lightskyblue',
    border: '1px solid lightskyblue'
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
    <div style={styles.container}>
      Vui lòng nhập mã OTP để xác nhận
      <ReactCodeInput fields={4} {...props} onChange={handleOtpChange}/>
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
