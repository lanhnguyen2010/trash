import {connect} from "react-redux";
import {compose} from "redux";
import {actions, selectors} from "../../redux";
import {lifecycle} from "recompose";
import React from 'react';
import {withStyles} from '@material-ui/styles';
import ReactCodeInput from 'react-code-input';
import {Button} from '@material-ui/core';
import * as ROUTES from "../../constants/routes";
import commonStyles from "../common"
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

const finish = ({history, endFlow}) => {
  endFlow();
  history.push(ROUTES.OTP);
};

const GiftResultView = ({selectedGift, history, endFlow}) => (
  <div className="container"  style={{...commonStyles.container, backgroundImage: "url('./images/result_background.png')"}}>
    <img src={Const.GiftResource[selectedGift].image} style={styles.imageResult}/>
    <div style={commonStyles.topText}>CHÚC MỪNG BẠN ĐÃ NHẬN ĐƯỢC {Const.GiftResource[selectedGift].label} TỪ PRUDENTIAL</div>
    <div style={commonStyles.topText}>CẢM ƠN BẠN ĐÃ THAM GIA CHƯƠNG TRÌNH</div>
    <Button style={commonStyles.button} onClick={() => finish({history, endFlow})}>Hoàn thành</Button>
  </div>
);
const GiftResult = withStyles(styles)(GiftResultView);

const GiftResultContainer = compose(
  connect(
    selectors.root,
    {
      endFlow : actions.endFlow
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
)(GiftResult);

export default GiftResultContainer;
