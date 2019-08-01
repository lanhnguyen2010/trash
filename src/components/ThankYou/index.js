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
    fontSize: '3vh',
    marginBottom: '5vh',
    width:'65%',
    margin: 'auto',
    color: colors.pruRed
  },
  textThankYou: {
    ...commonStyles.textNormal_bold,
    fontSize: '3vh',
    width:'70%',
    margin: 'auto',
    textTransform: 'uppercase'
  }
};

const finish = ({history, endFlow}) => {
  endFlow();
  history.push(ROUTES.HOME);
};

const ThankYouView = ({selectedGift, history, endFlow}) => (
  <div className="container"  style={{...commonStyles.container, ...styles.container}}>
    <div>
    <div style={styles.textTitle}>Cảm ơn bạn đã tham gia chương trình</div>
    <div style={{...styles.textTitle, color: colors.pruGrey, paddingTop: '5vh'}}>Cùng Prudential hành động</div>
    <div style={{...styles.textThankYou, color: colors.pruRed}}> chọn giảm dùng nhựa</div>
    <div style={{...styles.textThankYou, color: colors.pruGrey}}> vì sức khoẻ của những người thân yêu</div>
    <Button style={commonStyles.button} onClick={() => finish({history, endFlow})}>Hoàn thành</Button>
    </div>
  </div>
);
const ThankYou = withStyles(styles)(ThankYouView);

const ThankYouContainer = compose(
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
    }
  })
)(ThankYou);

export default ThankYouContainer;
