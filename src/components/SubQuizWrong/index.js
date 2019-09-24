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
  questionTitle: {
    textAlign: 'left',
    width: '70%',
    paddingLeft: '5%',
  },

  questionLabel: {
    fontFamily: fonts.extraBold,
    fontSize: '6.5vh',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
    color: colors.pruRed,
  },

  questionContent: {
    ...commonStyles.textStyleBig_bold,
    fontFamily: fonts.extraBold,
    fontSize: '3.5vh',
    textAlign: 'left',
    color: colors.pruRed
  },

  questionResultTitle: {
    ...commonStyles.textStyleBig_bold,
    fontFamily: fonts.regular,
    fontSize: '3.5vh',
    textAlign: 'center',
    color: colors.pruGrey,
    lineHeight: '5vh',
    padding: '5%',
    marginTop: '5vh'
  },

  answer: {
    margin: '0 auto',
    width: '75%',
    marginTop: '4vh'
  },

  baseAnswer: {
    ...commonStyles.textNormal_bold,
    fontFamily: fonts.regular,
    borderRadius: 100,
    color: colors.pruGrey,
    fontSize: '3vh',
    textAlign: 'left',
    borderColor: colors.pruGrey,
    borderWidth: 2,
    borderStyle: 'solid',
    padding: '2vh',
    marginTop: 20
  },

  correctAnswer: {
    borderRadius: 100,
    background: colors.pruRed,
    borderColor: 'rgba(255, 255, 255, 1)',
    color: 'white',
    fontSize: '3vh',
    textAlign: 'left',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: '2vh',
    marginTop: 20
  },

  wrongAnswer: {
    borderRadius: 100,
    background: 'rgba(43, 43, 43, 0.5)',
    borderColor: colors.pruGrey,
    color: 'white',
    fontSize: '3vh',
    textAlign: 'left',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: '2vh',
    marginTop: 20
  },

  backgroundChaiNhua: {
    backgroundImage: "url('https://drive.google.com/uc?id=1MKGqOZFVElTtslwTbRD2oN6SImUX5wgU')"
  },

  backgroundLyNhua: {
    backgroundImage: "url('https://drive.google.com/uc?id=10xPCZAcUsEHhdaThhYQJrbcRJkJwua23')"
  },

  backgroundHop: {
    backgroundImage: "url('https://drive.google.com/uc?id=1pwvR_oVo8vK656DsaXIHI3IvUgDHbXFf')"
  },

  backgroundOther: {
    backgroundImage: "url('https://drive.google.com/uc?id=1oD8H5KOs94Ekdn0NX1ev-EzWRYzcKtxH')"
  },
  backgroundNylon: {
    backgroundImage: "url('https://drive.google.com/uc?id=1Utlz2hE3YC7v11go2rLerDD73TtyBmL7')"
  },
  questionSection: {
    paddingTop: '44%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: "100%"
  },

};

function getStyle(selectedTrash) {
  if (selectedTrash == Const.HOP_NHUA) {
    return {...styles.questionSection, ...styles.backgroundHop, ...commonStyles.container}
  }
  else if (selectedTrash == Const.CHAI) {
    return {...styles.questionSection, ...styles.backgroundChaiNhua, ...commonStyles.container}

  }
  else if (selectedTrash == Const.LY_NHUA) {
    return {...styles.questionSection, ...styles.backgroundLyNhua, ...commonStyles.container}

  }
  else if (selectedTrash == Const.NYLON) {
    return {...styles.questionSection, ...styles.backgroundNylon, ...commonStyles.container}

  }
  else {
    return {...styles.questionSection, ...styles.backgroundOther, ...commonStyles.container}
  }
}

const SubQuizWrongView = ({btnState, toogleState, selectedTrash, question, correctAnswerText, history}) => {

  return (
    <div style={getStyle(selectedTrash)}>
      <div style={styles.questionTitle}>
        <div style={styles.questionContent}>Theo bạn,</div>
        <div style={styles.questionContent}>cái giá thật sự
          của {selectedTrash == "others" ? "các" : "một"}</div>
        <div style={styles.questionLabel}> {Const.Questions[selectedTrash].label}</div>
        <div style={styles.questionContent}>{selectedTrash == "others" ? "này" : ""} là bao nhiêu?</div>
      </div>
      <div style={styles.questionResultTitle}>
        {correctAnswerText}
      </div>

      <div style={commonStyles.footer}>
        <Button style={commonStyles.bottomButton} onClick={() => {
          history.push(ROUTES.MORE_INFO)
        }}>
          Tìm hiểu thêm về cái giá thật sự của nhựa</Button>
      </div>
    </div>


  )
};

const SubQuizWrong = withStyles(styles)(SubQuizWrongView);

const SubQuizWrongContainer = compose(
  connect(
    selectors.root,
    {
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
)(SubQuizWrong);

export default SubQuizWrongContainer;
