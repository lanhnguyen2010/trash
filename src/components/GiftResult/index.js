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
    paddingTop: '20%',
    backgroundImage: "url('./images/result_background.jpg')",
  },
  textTitle: {
    color: colors.pruRed,
    fontSize: '3vh',
    width: '80%',
    fontFamily: fonts.bold,
    textTransform: 'uppercase'

  },
  textThankYou: {
    color: colors.pruRed,
    fontSize: '5vh',
    marginTop: '3vh',
    width: '80%',
    fontFamily: fonts.bold,
    textTransform: 'uppercase'
  },
  imageResult : {
    marginBottom: '3vh'
  }
};

const finish = ({history, endFlow}) => {
  endFlow();
  history.push(ROUTES.THANK_YOU);
};

const GiftResultView = ({selectedGift, history, endFlow}) => (
  <div className="container"
       style={{...commonStyles.container, ...styles.container}}>

    <img className="resultImg" src={"./images/binhnuoc.png"} style={styles.imageResult}/>

    <div style={{...commonStyles.textNormal_bold,...styles.textTitle}}>CHÚC MỪNG BẠN ĐÃ NHẬN ĐƯỢC</div>

    <div style={{...commonStyles.textNormal_bold,...styles.textThankYou}}>{Const.GiftResource[selectedGift].label}</div>
    <div style={commonStyles.footer}>
      <Button style={commonStyles.bottomButton} onClick={() => finish({history, endFlow})}>Hoàn thành</Button>
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
