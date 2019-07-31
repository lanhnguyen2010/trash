import {connect} from "react-redux";
import {compose} from "redux";
import {actions, selectors} from "../../redux";
import {lifecycle} from "recompose";
import React from 'react';
import {withStyles} from '@material-ui/styles';
import ReactCodeInput from 'react-code-input';
import {Button} from '@material-ui/core';
import * as ROUTES from "../../constants/routes";
import commonStyles, {fonts} from "../common"
import * as Const from "../../constants/Const";


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
    justifyContent: 'center',
    backgroundImage: "url('./images/result_background.png')"
  },

  textField: {
    marginTop: 20,
    minWidth: 300
  },

  btnVerifyOtp: {
    marginTop: 30
  },
  textTitle: {
    fontSize: '3vh',
    marginBottom: '5vh',
    width: '80%'

  },
  textThankYou: {
    fontSize: '3vh',
    fontFamily: fonts.regular,
    marginTop: '5vh',
    width: '80%'
  }
};

const finish = ({history, endFlow}) => {
  endFlow();
  history.push(ROUTES.OTP);
};

const GiftKatoothView = ({selectedGift, history, endFlow}) => (
  <div className="container"
       style={{...commonStyles.container, ...styles.container}}>
    <div style={{...commonStyles.textNormal_bold,...styles.textTitle}}>CHÚC MỪNG BẠN ĐÃ NHẬN ĐƯỢC MÓN QUÀ MAY MẮN TỪ PRUDENTIAL</div>

    <img className="resultImg" src={"./images/binhnuoc.png"} style={styles.imageResult}/>

    <div style={{...commonStyles.textNormal_bold,...styles.textThankYou}}>CẢM ƠN BẠN ĐÃ THAM GIA CHƯƠNG TRÌNH</div>
    <Button style={commonStyles.button} onClick={() => finish({history, endFlow})}>Hoàn thành</Button>
  </div>
);
const GiftKatooth = withStyles(styles)(GiftKatoothView);

const GiftKatoothContainer = compose(
  connect(
    selectors.root,
    {
      endFlow: actions.endFlow,
      saveGiftResult: actions.saveGiftResult
    }
  ),
  lifecycle({
    componentWillMount() {
      const {history, isLoggedIn, saveGiftResult} = this.props;
      saveGiftResult("kahoot");
      if (!isLoggedIn) {
        history.push(ROUTES.LOG_IN)
      }
    }
  })
)(GiftKatooth);

export default GiftKatoothContainer;
