import React from 'react';
import {withStyles} from '@material-ui/styles';
import {
  TextField,
  Button
} from '@material-ui/core';


const styles = {
  questionTitle: {},

  activeAnswer: {
    border: 1,
    borderColor: 'white',
    borderRadius: 15
  },

  passiveAnswer: {},

  questionSection: {
    padding: 60,
    textAlign: 'center',
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    width: "100%"
  },
};

const Quiz = ({render, btnState, toogleState}) => (
    <div className="container" style={{display: 'flex', alignItems: 'stretch', alignContent: 'stretch'}}>
      {render ? <Question {...{btnState, toogleState}}/> : <Intro/>}
    </div>
  )
;

const Intro = () => (
  <div>Intro</div>
);


const Question = ({btnState, toogleState}) => (
  <div style={styles.questionSection}>
    <div style={styles.questionTitle}>Đồ nhựa mà bạn vừa bỏ vào máy là gì trong những vật sau</div>
    <div className="grid2x2">
      <div className="box box1" style={btnState[0] ? styles.activeAnswer : styles.passiveAnswer} onClick={() => toogleState(0)}>
        <div>Chai</div>
      </div>
      <div className="box box2" style={btnState[1] ? styles.activeAnswer : styles.passiveAnswer} onClick={() => toogleState(1)}>
        <div>Ly nhua</div>
      </div>
      <div className="box box3" style={btnState[2] ? styles.activeAnswer : styles.passiveAnswer} onClick={() => toogleState(2)}>
        <div>Hop nhua</div>
      </div>
      <div className="box box4" style={btnState[3] ? styles.activeAnswer : styles.passiveAnswer} onClick={() => toogleState(3)}>
        <div>Cac do dung mot lan</div>
      </div>
    </div>

  </div>
);

export default withStyles(styles)(Quiz);