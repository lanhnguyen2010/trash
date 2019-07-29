import React from 'react';
import {withStyles} from '@material-ui/styles';
import {
  TextField,
  Button
} from '@material-ui/core';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundImage: "url('./images/luuH.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: "100%",
    height: '100%'
  },
  intro: {
    width: '100%',
    height: '40%',
    textAlign: 'center',
    marginTop: '40%',
    fontSize:'6vh',
    color:'white'
  },
  footer: {
    position: "fixed",
    bottom: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "30vh",
  },
  button: {
    position:"fixed",
    bottom:"7vh",
    alignSelf: "center",
    backgroundColor: '#D20C08',
    fontSize: "3vh",
    width: "74vw",
    borderRadius: "50px"
  }
};

const Quiz = ({render, btnState, toogleState}) => (
    <div className="container-fuild" style={styles.container}>
      {render ? <Question {...{btnState, toogleState}}/> : <Intro/>}
    </div>
  )
;

const Intro = () => (
    <div>
      <div style={styles.intro}>NÀO CŨNG BỎ VÀO MÁY ĐỒ DÙNG NHỰA BẠN ĐANG CÓ</div>
      <div style={styles.footer}> <Button style={styles.button}
                                          variant="contained"
                                          color="primary"
                                          size="large">
        Bạn đã sẵn sàng</Button>
      </div>
    </div>

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