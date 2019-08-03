import React from 'react';
import {withStyles} from '@material-ui/styles';
import {
  TextField,
  Button
} from '@material-ui/core';

import commonStyles, {colors, fonts} from '../common'


const styles = {
  questionTitle: {
    ...commonStyles.textStyleBig_bold,
    width: '70%',
    margin: 'auto',
    color: colors.pruRed,
    fontSize: '4vh',
    marginTop: '5vh'
  },

  activeAnswer: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: 'white',
    borderRadius: 15,
    background: colors.pruRed,
  },

  passiveAnswer: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 15,
    background: 'rgba(0,0,0,0.1)',
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
    backgroundPosition: 'bottom',
    backgroundSize: 'contain',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    marginTop: 20
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
    marginBottom: 20,
    color: colors.pruGrey,
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
    color: colors.pruRed,
    margin: 'auto',
    paddingTop: '30%',
  },
  textBottom: {
    marginBottom: '4vh',
    marginTop: '2vh',
    fontSize: '2vh',
    fontFamily: fonts.bold,
    marginLeft: 44,
    textAlign: 'left'
  }
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
    <div style={styles.questionTitle}>Hãy chọn loại đồ nhựa mà bạn vừa bỏ vào máy</div>

    <div className="grid2x2">
      <div className="box" style={btnState[0] ? styles.activeAnswer : styles.passiveAnswer}
           onClick={() => toogleState(0)}>
        <div style={{...styles.image, backgroundImage: "url('./images/quiz/chainhua.png')"}}/>
        <div style={{...styles.label, color: btnState[0] ? 'white' : colors.pruGrey}}>Chai nhựa</div>
      </div>
      <div className="box" style={btnState[1] ? styles.activeAnswer : styles.passiveAnswer}
           onClick={() => toogleState(1)}>
        <div style={{...styles.image, backgroundImage: "url('./images/quiz/lynhua.png')"}}/>
        <div style={{...styles.label, color: btnState[1] ? 'white' : colors.pruGrey}}>Ly nhựa</div>
      </div>
      <div className="box" style={btnState[2] ? styles.activeAnswer : styles.passiveAnswer}
           onClick={() => toogleState(2)}>
        <div style={{...styles.image, backgroundImage: "url('./images/quiz/hopnhua.png')"}}/>
        <div style={{...styles.label, color: btnState[2] ? 'white' : colors.pruGrey}}>Hộp nhựa</div>
      </div>
      <div className="box" style={btnState[3] ? styles.activeAnswer : styles.passiveAnswer}
           onClick={() => toogleState(3)}>
        <div style={{...styles.image, backgroundImage: "url('./images/quiz/nilon.png')"}}/>
        <div style={{...styles.label, color: btnState[3] ? 'white' : colors.pruGrey}}>Túi nylon các loại</div>
      </div>
    </div>

    <div className="box" style={{
      ...(btnState[4] ? styles.activeAnswer : styles.passiveAnswer),
      marginLeft: 44, marginRight: 44,
      marginTop: 0, display: 'flex', flexDirection: 'row',
      justifyContent: 'center', alignItems: 'center',
    }}
         onClick={() => toogleState(4)}>
      <div style={{...styles.image, backgroundImage: "url('./images/quiz/other.png')", width: '30%'}}/>
      <div style={{...styles.label, color: btnState[4] ? 'white' : colors.pruGrey}}>Đồ nhựa khác (Muỗng nĩa, ống
        hút,...)
      </div>
    </div>
    <div style={styles.textBottom}>* Khuyến khích bỏ ít nhất 2 món</div>
  </div>
);

export default withStyles(styles)(Quiz);