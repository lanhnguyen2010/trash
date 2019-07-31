import React from 'react';
import {withStyles} from '@material-ui/styles';
import {
  TextField,
  Button
} from '@material-ui/core';

import commonStyles from '../common'


const styles = {
  questionTitle: {
    ...commonStyles.textStyleBig_bold,
    width: '70%',
    margin: 'auto',
    color: "#BA0000",
    fontSize: '4vh'
  },

  activeAnswer: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: 'white',
    borderRadius: 15,
    padding: 20
  },

  passiveAnswer: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: 'white',
    borderRadius: 15,
    padding: 20
  },

  questionSection: {
    textAlign: 'center',
    backgroundSize: "cover",
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    width: "100%",
    textAlign: 'center'
  },

  background: {
    backgroundImage: "url('./images/background_global.png')"
  },

  image: {
    backgroundPosition: '50% 50%',
    backgroundSize: 'contain',
    height: '70%',
    backgroundRepeat: 'no-repeat',
  },
  reminder: {
    position: "absolute",
    left: 25,
    bottom: 25,
    color: "white",
    fontWeight: "bold",
  },

  label: {
    ...commonStyles.textNormal_bold,
    bottom: 0,
    marginTop: 20,
    color: "#2b2b2b",
    textTransform: "uppercase"
  },

  label4: {
    bottom: 0,
    fontWeight: "bold",
    fontSize: 17,
    color: "white",
    width: "100%",
    height: '100%'
  },
  intro: {
    ...commonStyles.textStyleBig_bold,
    width: '75%',
    color: "#BA0000",
    margin: 'auto',
    paddingTop: '30%',
  },
};

const Quiz = ({render, btnState, toogleState, updateRender}) => (
    <div className="container" style={{...commonStyles.container, ...styles.background, display: 'flex'}}>
      {render ? <Question {...{btnState, toogleState}}/> : <Intro {...{updateRender}}/>}
    </div>
  )
;

const Intro = ({updateRender}) => (
  <div style={styles.container}>
    <div style={styles.intro}>HÃY BỎ ĐỒ NHỰA BẠN ĐANG CÓ VÀO MÁY</div>
    <div style={commonStyles.footer}>
      <Button style={commonStyles.bottomButton}
              onClick={() => updateRender(true)}>
        Tiếp tục nào</Button>
    </div>
  </div>

);


const Question = ({btnState, toogleState}) => (
  <div style={styles.questionSection}>
    <div style={styles.questionTitle}>Hãy chọn loại đồ nhựa mà bạn vừa bỏ vào máy </div>

    <div className="grid2x2">
      <div className="box" style={btnState[0] ? styles.activeAnswer : styles.passiveAnswer}
           onClick={() => toogleState(0)}>
        <div style={{...styles.image, backgroundImage: "url('./images/quiz/chainhua.png')"}}/>
        <div style={styles.label}>Chai nhựa</div>
      </div>
      <div className="box" style={btnState[1] ? styles.activeAnswer : styles.passiveAnswer}
           onClick={() => toogleState(1)}>
        <div style={{...styles.image, backgroundImage: "url('./images/quiz/lynhua.png')"}}/>
        <div style={styles.label}>Ly nhựa</div>
      </div>
      <div className="box" style={btnState[2] ? styles.activeAnswer : styles.passiveAnswer}
           onClick={() => toogleState(2)}>
        <div style={{...styles.image, backgroundImage: "url('./images/quiz/hopnhua.png')"}}/>
        <div style={styles.label}>Hộp nhựa</div>
      </div>
      <div className="box" style={btnState[3] ? styles.activeAnswer : styles.passiveAnswer}
           onClick={() => toogleState(3)}>
        <div style={{...styles.image, backgroundImage: "url('./images/quiz/other.png')"}}/>
        <div style={styles.label}>Các đồ nhựa khác (Muỗng nĩa, ống hút, túi ni lông,...)</div>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(Quiz);