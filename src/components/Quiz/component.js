import React from 'react';
import {withStyles} from '@material-ui/styles';
import {
  TextField,
  Button
} from '@material-ui/core';

import commonStyles from '../common'


const styles = {
  questionTitle: {
    fontSize: 34,
    justifyContent: "center",
    color: 'white',
    width: '80%',
    margin: 'auto'
  },

  activeAnswer: {
    border: 1,
    borderColor: 'white',
    borderRadius: 15
  },

  passiveAnswer: {},

  questionSection: {
    textAlign: 'center',
    backgroundSize: "cover",
    margin:'auto',
    paddingTop: 100
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

  background:{
    backgroundImage: "url('./images/luuH.png')"
  },

  image: {
    position: "relative",
    width: "50%",
    height: "50%",
  },
  reminder:{
    position: "absolute",
    left: 25,
    bottom: 25,
    color: "white",
    fontWeight: "bold",
  },

  label:{
    bottom: 0,
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  },

  label4:{
    bottom: 0,
    fontWeight: "bold",
    fontSize: 17,
    color: "white",
    width: "100%",
    height: '100%'
  },
  intro: {
    width: '70%',
    textAlign: 'center',
    fontSize: 25,
    color:'white',
    margin:'auto',
    paddingTop: '30%'
  },
  footer: {
    bottom: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "30vh",
  },
  button: {
    position:'fixed',
    bottom:'5%',
    alignSelf: "center",
    backgroundColor: '#D20C08',
    fontSize: 20,
    width: "70%",
    borderRadius: "50px",
    left: '15%'
  }
};

const Quiz = ({render, btnState, toogleState, updateRender}) => (
    <div className="container-fuild" style={{...commonStyles.container, ... styles.background}}>
      {render ? <Question {...{btnState, toogleState}}/> : <Intro {...{updateRender}}/>}
    </div>
  )
;

const Intro = ({updateRender}) => (
    <div style={styles.container}>
      <div style={styles.intro}>NÀO CÙNG BỎ VÀO MÁY ĐỒ DÙNG NHỰA BẠN ĐANG CÓ</div>
      <Button style={styles.button}
                                          variant="contained"
                                          color="primary"
                                          size="large"
      onClick={()=> updateRender(true)}>
        Bạn đã sẵn sàng</Button>
    </div>

);


const Question = ({btnState, toogleState}) => (
  <div style={styles.questionSection}>
    <div style={styles.questionTitle}>Đồ nhựa mà bạn vừa bỏ vào máy là gì trong những vật sau</div>

    <div className="grid2x2">
      <div className="box" style={btnState[0] ? styles.activeAnswer : styles.passiveAnswer} onClick={() => toogleState(0)}>
        <img src="./images/chai.svg" alt="chai nhua" style={styles.image}/>
        <div style={styles.label}>Chai nhựa</div>
      </div>
      <div className="box" style={btnState[1] ? styles.activeAnswer : styles.passiveAnswer} onClick={() => toogleState(1)}>
        <img src="./images/ly.svg" alt="ly nhua" style={styles.image}/>
        <div style={styles.label}>Ly nhựa</div>
      </div>
      <div className="box" style={btnState[2] ? styles.activeAnswer : styles.passiveAnswer} onClick={() => toogleState(2)}>
        <img src="./images/hop.svg" alt="hop nhua" style={styles.image}/>
        <div style={styles.label}>Hộp nhựa</div>
      </div>
      <div className="box" style={btnState[3] ? styles.activeAnswer : styles.passiveAnswer} onClick={() => toogleState(3)}>
        <img src="./images/muong_nia.svg" alt="muong nia" style={styles.image}/>
        <div style={styles.label4}>Các đồ nhựa khác (Muỗng nĩa, ống hút, túi ni lông,...)</div>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(Quiz);