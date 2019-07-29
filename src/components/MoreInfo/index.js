import React, {Component} from 'react';
import * as ROUTES from "../../constants/routes";

import {Button} from '@material-ui/core';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import * as selectors from "../../redux/selectors";
import {actions} from "../../redux";
import {lifecycle} from "recompose";
import commonStyle from "../common"


const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: "#D20C08",
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 1.5,
    letterSpacing: 1
  },
  textBlack: {
    color: "black",
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 1.5,
    letterSpacing: 1
  },
  textEnd: {
    color: "#D20C08",
    fontSize: 40,
    lineHeight: 1.5,
    letterSpacing: 0.5,
    textAlign: 'center'
  },
  textBlackEnd: {
    color: "black",
    fontSize: 30,
    lineHeight: 1.5,
    letterSpacing: 1,
    textAlign: 'center'
  },
  button: {
    position: 'fixed',
    zIndex: 100,
    bottom: 0,
    display: 'flex',
    alignSelf: "center",
    backgroundColor: '#D20C08',
    fontSize: 25,
    borderRadius: 50,
    marginBottom: '5%',
    width: '70%',
  },
  logo: {
    position: "fixed",
    zIndex: 100,
    top: 30,
    left: 30
  },
  pruImage : {
    width: '33.3%'
  },
  pruButton : {
    width: '100%',
    fontSize: 35
  }
};

const MoreInfo = ({history}) => {
  let trackRef;
  let btnRef;
  let logoRef;
  const routeChange = () => {
    trackRef.clickNext();
    if (trackRef.index >= 3) {
      btnRef.style.display = 'none';
      logoRef.style.display = 'none'
    }

    if (trackRef.index == 4) {
      setTimeout(function () {
        history.push(ROUTES.LUCKY_DRAW)
      }.bind(this), 3000)
    }
  };

  return (
    <div className="container">
      <img src="./images/logo.svg" alt="prudential logo" style={styles.logo} ref={t => logoRef = t}/>
      <AwesomeSlider style={{width: '100%', height: '100%', position:'absolute'}}
                     bullets={false}
                     organicArrows={false}
                     ref={t => trackRef = t}>

        <div data-src='./images/home1.png'/>
        <div data-src='./images/home2.png'/>
        <div data-src='./images/home3.png'/>
        <div data-src='./images/home4.png'/>

        <div data-src='./images/home2.png'>
          <div style={{...styles.footer, flexDirection: 'row', background: 'white'}}>
            <div style={{display: 'flex', flexDirection: 'column', width:"70%", padding: 30}}>
              <div style={styles.textBlack}>Chung Tay Cùng Prudential Cam Kết</div>
              <div style={styles.text}>Chọn Giảm Dùng Nhựa Vì Sức Khoẻ Của Những Người Thân Yêu</div>

              <Button style={{...commonStyle.button, ...styles.pruButton }} onClick={() => routeChange()}>Tiếp tục</Button>
            </div>

            <img style={styles.pruImage} src="./images/logo.svg"/>
          </div>
        </div>

        <div data-src='./images/home2.png'>
          <div style={{...styles.footer, background: 'white'}}>
            <div style={{display: 'flex', flexDirection: 'column', width:"70%", padding: 30}}>
              <div style={styles.textEnd}>Cảm Ơn Sự Ủng Hộ Và Tinh Thần Hành Động Của Bạn.</div>
              <div style={styles.textBlackEnd}>Nhân viên của Prudential tại quầy sẽ hướng dẫn bạn các bước tiếp theo</div>
            </div>
          </div>
        </div>

      </AwesomeSlider>

      <div style={styles.footer}>
        <Button style={{...styles.button}}
                variant="contained"
                color="primary"
                size="large"
                onClick={() => routeChange()}
                ref={t => btnRef = t}
        >
          Tìm hiểu thêm</Button>
      </div>

    </div>
  );
};

const MoreInfoContainer = compose(
  connect(
    selectors.root,
    {}
  ),
  lifecycle({
    componentWillMount() {

    }
  })
)(MoreInfo);

export default MoreInfoContainer;
