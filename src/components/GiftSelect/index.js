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
    marginBottom: 40
  },
  button : {
    background: 'rgba(207, 0, 0, 0.5)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
    borderStyle: 'solid',
    width: '70%'
  },
  title: {
    width: '80%',
    fontSize: '4vh',
    textTransform: 'uppercase'
  }
};


const GiftSelectView = ({history, updateSelectedGift}) => {
  return (
    <div className="container"  style={{...commonStyles.container,...styles.container,
      backgroundImage: "url('./images/player_info_background.png')",

    }}>
      <div style={{...commonStyles.textNormal_bold, ...styles.title}}>Bạn hãy chọn chương trình muốn tham gia</div>
      <Button style={{...commonStyles.button, ...styles.button}}
              onClick={() => {
                updateSelectedGift("binhthuytinh");
                history.push(ROUTES.GIFT_ONLY)
              }}>Nhận quà</Button>
      <Button style={{...commonStyles.button, ...styles.button}} onClick={() => history.push(ROUTES.LUCKY_DRAW)}>Vòng xoay may mắn</Button>
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
