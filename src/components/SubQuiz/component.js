import React from 'react';
import {withStyles} from '@material-ui/styles';
import {
  TextField,
  Button
} from '@material-ui/core';

import * as Routes from "../../constants/routes"

const styles = {
  questionTitle: {},

  baseAnswer: {
    border: 1,
    borderColor: 'white',
    borderRadius: 15
  },

  correctAnswer: {
    color: 'blue'
  },

  wrongAnswer: {
    color: 'green'
  },

  questionSection: {
    padding: 60,
    textAlign: 'center',
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    width: "100%"
  },
};

const SubQuiz = ({history, answerResult, btnState, toogleState, selectedTrash, question}) => {
    return (
      <div className="container" style={{display: 'flex', alignItems: 'stretch', alignContent: 'stretch'}}>
        {answerResult ? <Result {...{history, answerResult}}/> : <Question {...{btnState, toogleState, selectedTrash, question}}/>}
      </div>
    )
  }
;

const Result = ({history, answerResult}) => (
  <div>
    <div>
      {answerResult ? "Bạn đã chọn chính xac" : "Câu trả lời chưa đúng"}
    </div>

    <div>
      Cái giá thật sự phải trả cho việc sử dụng nhựa thật sự đắt hơn chúng ta biết đấy.
    </div>

    <button onClick={() => history.push(Routes.MORE_INFO)}>Tìm hiểu thêm về cái giá thật sự của nhựa</button>
  </div>
);

const QuestionStyle = {
  normal: styles.baseAnswer,
  correct: styles.correctAnswer,
  wrong: styles.wrongAnswer
};


const Question = ({btnState, toogleState, selectedTrash, question}) => {
  return question ? (
    <div style={styles.questionSection}>
      <div style={styles.questionTitle}>Theo bạn, cái giá thực sự
        của {question.label == "món đồ nhựa" ? "các" : "một"} {question.label} này là bao nhiêu?
      </div>
      <div onClick={() => toogleState(0)}>
        {question.answers[0]}
      </div>

      <div style={QuestionStyle[btnState[1]]}
           onClick={() => toogleState(1)}>
        {question.answers[1]}
      </div>

      <div style={QuestionStyle[btnState[2]]}
           onClick={() => toogleState(2)}>
        {question.answers[2]}
      </div>
    </div>
  ) : <div/>
};

export default withStyles(styles)(SubQuiz);