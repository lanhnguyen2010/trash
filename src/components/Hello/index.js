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
    backgroundImage: "url('./images/background_global.png')",
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
  textTitle: {
    ...commonStyles.textNormal_bold,
    fontSize: '5vh',
    marginBottom: '5vh',
    width:'75%',
    margin: 'auto',
    color: colors.pruGrey,
    textAlign: 'left'
  },
  textThankYou: {
    ...commonStyles.textNormal_bold,
    fontSize: '4vh',
    width:'75%',
    margin: 'auto',
    marginTop: '3vh',
    textAlign: 'left',
    lineHeight: '1.4',
    marginBottom: '15vh'
  }
};


const HelloView = ({history, endFlow}) => (
  <div className="container"  style={{...commonStyles.container, ...styles.container}}>
    <div>
    <div style={styles.textTitle}>Xin chào!</div>
    <div style={{...styles.textThankYou, color: colors.pruRed}}>
      Cảm ơn bạn đồng hành cùng Prudential trên hành trình tìm hiểu cái giá thật sự của nhựa.</div>
    </div>
  </div>
);
const Hello = withStyles(styles)(HelloView);

const HelloContainer = compose(
  connect(
    selectors.root,
    {
      endFlow : actions.endFlow,
    }
  ),
  lifecycle({
    componentWillMount() {
      const {history, isLoggedIn} = this.props;
      if (!isLoggedIn) {
        history.push(ROUTES.LOG_IN)
      }
    },
    componentDidMount() {
      const {history, endFlow} = this.props;
      setTimeout(function () {
        endFlow();
        history.push(ROUTES.QUIZ)
      }.bind(this), 3000)

    }
  })
)(Hello);

export default HelloContainer;
