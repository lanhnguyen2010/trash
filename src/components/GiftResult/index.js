import {connect} from "react-redux";
import {compose} from "redux";
import {actions, selectors} from "../../redux";
import {lifecycle} from "recompose";
import React from 'react';
import {withStyles} from '@material-ui/styles';
import ReactCodeInput from 'react-code-input';
import {Button} from '@material-ui/core';
import * as ROUTES from "../../constants/routes";
import commonStyles, {fonts, colors} from "../common"
import * as Const from "../../constants/Const";


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: "url('./images/result_background.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
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
  textTitle: {
    ...commonStyles.textNormal_bold,
    fontSize: '2.5vh',
    marginBottom: '5vh',
    margin: 'auto',
    color: colors.pruRed
  },

  textGift: {
    ...commonStyles.textNormal_bold,
    fontSize: '5vh',
    marginBottom: '5vh',
    margin: 'auto',
    color: colors.pruRed,
    textTransform: 'uppercase'
  },
};

const finish = ({history, endFlow}) => {
  endFlow();
  history.push(ROUTES.THANK_YOU);
};

const GiftResultView = ({selectedGift, history, endFlow}) => (
  <div className="container"  style={{...commonStyles.container, ...styles.container}}>
    <div>
    <div style={styles.textTitle}>CHÚC MỪNG BẠN ĐÃ NHẬN ĐƯỢC</div>
    <div style={styles.textGift}>{Const.GiftResource[selectedGift].label}</div>
    <Button style={commonStyles.button} onClick={() => finish({history, endFlow})}>Hoàn thành</Button>
    </div>
  </div>
);
const GiftResult = withStyles(styles)(GiftResultView);

const GiftResultContainer = compose(
  connect(
    selectors.root,
    {
      endFlow : actions.endFlow,
      saveGiftResult: actions.saveGiftResult
    }
  ),
  lifecycle({
    componentWillMount() {
      const {history, isLoggedIn, saveGiftResult, selectedGift} = this.props;
      console.log("selectedGift", selectedGift);
      saveGiftResult("luckyDraw");
      if (!isLoggedIn) {
        history.push(ROUTES.LOG_IN)
      }
    }
  })
)(GiftResult);

export default GiftResultContainer;
