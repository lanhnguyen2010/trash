import React from 'react';
import {withStyles} from '@material-ui/styles';
import {
  TextField,
  Button
} from '@material-ui/core';

import * as Routes from "../../constants/routes"
import commonStyles, {fonts, colors} from "../common"

const styles = {
  questionTitle: {
    textAlign: 'left',
    width: '70%',
    paddingLeft: '5%',
  },

  questionLabel: {
    ...commonStyles.textStyleBig_bold,
    fontSize: '6.5vh',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
    color: colors.pruRed,
  },

  questionContent: {
    ...commonStyles.textStyleBig_bold,
    fontSize: '3.5vh',
    textAlign: 'left',
    color: colors.pruRed
  },

  questionResultTitle: {
    ...commonStyles.textStyleBig_bold,
    fontSize: '3.5vh',
    textAlign: 'left',
    color: colors.pruGrey,
    lineHeight: '5vh'
  },

  answer: {
    margin: 'auto',
    width: '70%'
  },

  baseAnswer: {
    ...commonStyles.textNormal_bold,
    fontFamily: fonts.regular,
    borderRadius: 100,
    color: colors.pruGrey,
    fontSize: '3vh',
    textAlign: 'left',
    borderColor: colors.pruGrey,
    borderWidth: 1,
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
    backgroundImage: "url('./images/backgroundChaiNhua.jpg')"
  },

  backgroundLyNhua: {
    backgroundImage: "url('./images/backgroundLyNhua.jpg')"
  },

  backgroundHop: {
    backgroundImage: "url('./images/backgroundHopNhua.jpg')"
  },

  backgroundOther: {
    backgroundImage: "url('./images/backgroundDoDungNhua.jpg')"
  },
  backgroundNylon: {
    backgroundImage: "url('./images/backgroundTuiNilon.jpg')"
  },
  questionSection: {
    paddingTop: '48%',
    textAlign: 'center',
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    width: "100%"
  },
};

function getStyle(label) {
  if (label == "hộp nhựa") {
    return {...styles.questionSection, ...styles.backgroundHop, ...commonStyles.container}
  }
  else if (label == "chai nhựa") {
    return {...styles.questionSection, ...styles.backgroundChaiNhua, ...commonStyles.container}

  }
  else if (label == "ly nhựa") {
    return {...styles.questionSection, ...styles.backgroundLyNhua, ...commonStyles.container}

  }
  else if (label == "túi nylon") {
    return {...styles.questionSection, ...styles.backgroundNylon, ...commonStyles.container}

  }
  else {
    return {...styles.questionSection, ...styles.backgroundOther, ...commonStyles.container}
  }
}

const SubQuiz = ({history, answerResult, btnState, toogleState, selectedTrash, question}) => {
    return (
      <div className="container" style={{display: 'flex', alignItems: 'stretch', alignContent: 'stretch'}}>
        {answerResult ? <Result {...{history, answerResult, question}}/> :
          <Question {...{btnState, toogleState, selectedTrash, question}}/>}
      </div>
    )
  }
;

const Result = ({history, answerResult, question}) => (
  <div style={getStyle(question.label)}>\
    <div style={styles.questionTitle}>
      <div style={styles.questionLabel}>
        {answerResult == "correct" ? "Bạn đã chọn chính xác!" : "Câu trả lời chưa đúng"}
      </div>

      <div style={styles.questionResultTitle}>
        Cái giá thật sự phải trả cho việc sử dụng nhựa thật sự đắt hơn chúng ta biết đấy.
      </div>
    </div>
    <div style={commonStyles.footer}>
      <Button style={commonStyles.bottomButton} onClick={() => history.push(Routes.MORE_INFO)}>Tìm hiểu thêm về cái giá
        thật sự của nhựa</Button>
    </div>
  </div>
);

const QuestionStyle = {
  normal: styles.baseAnswer,
  correct: styles.correctAnswer,
  wrong: styles.wrongAnswer
};


const Question = ({btnState, toogleState, selectedTrash, question}) => {

  return question ? (
    <div style={getStyle(question.label)}>
      <div style={styles.questionTitle}>
        <div style={styles.questionContent}>Theo bạn,</div>
        <div style={styles.questionContent}>cái giá thật sự
          của {question.label == "món đồ nhựa" ? "các" : "một"}</div>
        <div style={styles.questionLabel}> {question.label}</div>
        <div style={styles.questionContent}>là bao nhiêu?</div>
      </div>
      <div style={styles.answer}>
        <div style={QuestionStyle[btnState[0]]}
             onClick={() => toogleState(0)}>
          A. {question.answers[0]}
        </div>

        <div style={QuestionStyle[btnState[1]]}
             onClick={() => toogleState(1)}>
          B. {question.answers[1]}
        </div>

        <div style={QuestionStyle[btnState[2]]}
             onClick={() => toogleState(2)}>
          C. {question.answers[2]}
        </div>
      </div>
    </div>
  ) : <div/>
};

export default withStyles(styles)(SubQuiz);