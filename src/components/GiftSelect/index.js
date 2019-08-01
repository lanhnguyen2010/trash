import {connect} from "react-redux";
import {compose} from "redux";
import {actions, selectors} from "../../redux";
import {lifecycle} from "recompose";
import React from 'react';
import {withStyles} from '@material-ui/styles';
import ReactCodeInput from 'react-code-input';
import {Button} from '@material-ui/core';
import * as ROUTES from "../../constants/routes";
import commonStyles, {colors} from "../common"


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  textField: {
    marginTop: 20,
    minWidth: 300
  },

  btnVerifyOtp: {
    marginTop: 30
  },

  button : {
    borderColor: "white",
    borderWidth: 1,
    borderStyle: 'solid',
    width: '70%'
  },
  title: {
    width: '80%',
    fontSize: '4vh',
    color: colors.pruRed,
  }
};


const GiftSelectView = ({history, updateSelectedGift}) => {
  return (
    <div className="container"  style={{...commonStyles.container,...styles.container,
      backgroundImage: "url('./images/background_global.png')",

    }}>
      <div style={{...commonStyles.textNormal_bold, ...styles.title}}>Hãy chọn hoạt động bạn vừa tham gia nhé</div>
      <Button style={{...commonStyles.button, ...styles.button}}
              onClick={() => {
                console.log("onclick select", this);
                history.push(ROUTES.LUCKY_DRAW);
              }}>Quyên góp nhựa</Button>

      <Button style={{...commonStyles.button, ...styles.button}}
              onClick={() => {
                console.log("onclick select", this);
                updateSelectedGift("binhthuytinh");
                history.push(ROUTES.GIFT_ONLY)
              }}>Hoạt động chụp hình</Button>
      <Button style={{...commonStyles.button, ...styles.button}}
              onClick={() => {
                updateSelectedGift("binhthuytinh");
                history.push(ROUTES.GIFT_ONLY)
              }}>Trò chơi Katooth</Button>
    </div>)
};

const GiftSelect = withStyles(styles)(GiftSelectView);

const GiftSelectContainer = compose(
  connect(
    selectors.root,
    {
      updateSelectedGift: actions.updateSelectedGift
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
)(GiftSelect);

export default GiftSelectContainer;
