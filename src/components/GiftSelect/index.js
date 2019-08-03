import {connect} from "react-redux";
import {compose} from "redux";
import {actions, selectors} from "../../redux";
import {lifecycle} from "recompose";
import React from 'react';
import {withStyles} from '@material-ui/styles';
import ReactCodeInput from 'react-code-input';
import {Button} from '@material-ui/core';
import * as ROUTES from "../../constants/routes";
import commonStyles, {colors, fonts} from "../common"


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
    marginBottom: '5vh'
  },

  normalOption: {
    ...commonStyles.textNormal_bold,
    borderRadius: 100,
    color: colors.pruGrey,
    fontSize: '3vh',
    textAlign: 'left',
    borderColor: 'rgba(0,0,0, 0.3)',
    borderWidth: 4,
    borderStyle: 'solid',
    padding: '2vh',
    marginTop: '5vh',
    width: '70%',
    textTransform: 'none'
  },

  selectedOption: {
    fontFamily: fonts.bold,
    borderRadius: 100,
    background: colors.pruRed,
    borderColor: 'rgba(255, 255, 255, 1)',
    color: 'white',
    fontSize: '3vh',
    textAlign: 'left',
    borderWidth: 4,
    borderStyle: 'solid',
    padding: '2vh',
    marginTop: '5vh',
    width: '70%',
    textTransform: 'none'
  },

};


const GiftSelectView = ({history, updateSelectedGift, btnState, onSelected}) => {
  return (
    <div className="container"  style={{...commonStyles.container,...styles.container,
      backgroundImage: "url('./images/background_global.png')",

    }}>
      <div style={{...commonStyles.textNormal_bold, ...styles.title}}>Hãy chọn hoạt động bạn vừa tham gia nhé</div>
      <Button style={btnState[0]? styles.selectedOption : styles.normalOption}
              onClick={() => {
                console.log("onclick select", this);
                onSelected(0);
              }}>Quyên góp nhựa</Button>

      <Button style={btnState[1]? styles.selectedOption : styles.normalOption}
              onClick={() => {
                console.log("onclick select", this);
                updateSelectedGift("binhthuytinh");
                onSelected(1);
              }}>Hoạt động chụp hình</Button>
      <Button style={btnState[2]? styles.selectedOption : styles.normalOption}
              onClick={() => {
                updateSelectedGift("binhthuytinh,onghutinox");
                onSelected(2);
              }}>Trò chơi Kahoot</Button>
    </div>)
};

const nextPage = [ROUTES.LUCKY_DRAW, ROUTES.GIFT_ONLY, ROUTES.GIFT_KAHOOT]

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
      let btnStateIntit = [false, false, false];

      this.setState({btnState: btnStateIntit,
        onSelected: (index) => {
          btnStateIntit[index] = true;
          setTimeout(function () {
            history.push(nextPage[index])
          }.bind(this), 500);
          this.setState({btnState: btnStateIntit, onSelected: () => {}})

        }
      });
    }
  })
)(GiftSelect);

export default GiftSelectContainer;
