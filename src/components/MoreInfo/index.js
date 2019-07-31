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
import commonStyle, {fonts} from "../common"


const styles = {
  logo: {
    position: "fixed",
    zIndex: 100,
    top: 30,
    left: 30
  },
  pruImage: {
    width: '33.3%'
  },
  pruButton: {
    fontSize: 35,
    marginBottom: '7%'
  },
  image: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    backgroundImage: "url('./images/moreInfo5.png')",
    backgroundSize: 'cover',
    alignItems: 'unset',
    paddingTop: '7%',
    paddingBottom: '7%',
  },
  textTitleSmall: {
    fontSize: '3vh',
    color: 'black',
    fontFamily: fonts.bold,
    maxWidth: '80%',
    margin: 'auto'
  },
  textTitle: {
    fontSize: '4vh',
    padding: '0.5vh',
    color: '#D20C08',
    fontFamily: fonts.bold,
    maxWidth: '80%',
    margin: 'auto'
  }
};

const MoreInfo = ({history, endFlow}) => {
  let trackRef;
  let btnRef;
  let logoRef;
  let btnDoneRef;
  const routeChange = () => {
    trackRef.clickNext();
    if (trackRef.index == 2) {
      setTimeout(function () {
        btnRef.style.display = 'none';
        btnDoneRef.style.display = '';
      }.bind(this), 1000)
    }
    if (trackRef.index >= 3) {
      btnDoneRef.style.display = 'none';
      logoRef.style.display = 'none'
    }

    if (trackRef.index == 4) {
      setTimeout(function () {
        endFlow();
        history.push(ROUTES.HOME)
      }.bind(this), 3000)
    }
  };

  return (
    <div className="container">
      <img src="./images/logo.svg" alt="prudential logo" style={styles.logo} ref={t => logoRef = t}/>
      <AwesomeSlider style={{width: '100%', height: '100%', position: 'absolute'}}
                     bullets={false}
                     organicArrows={false}
                     ref={t => trackRef = t}>
       
        <div style={{
          ...styles.image,
          backgroundImage: "url('./images/home1.png')",
        }}/>
        <div style={{
          ...styles.image,
          backgroundImage: "url('./images/home2.png')",
        }}/>
        <div style={{
          ...styles.image,
          backgroundImage: "url('./images/home3.png')",
        }}/>
        <div style={{
          ...styles.image,
          backgroundImage: "url('./images/home4.png')",
        }}/>

        <div style={{
          ...styles.image,
          backgroundImage: "url('./images/moreInfo5.png')"
        }}>
          <div style={styles.textTitleSmall}>Cùng Prudential hành động</div>
          <div style={styles.textTitle}>Chọn giảm dùng nhựa</div>
          <div style={styles.textTitleSmall}>Vì sức khoẻ người thân yêu</div>

          <div style={commonStyle.footer}>
            <Button style={{...commonStyle.bottomButton, ...styles.pruButton}} onClick={() => routeChange()}>
              Tôi chọn giảm dùng nhựa
            </Button>
          </div>
        </div>

        <div style={{
          ...styles.image,
          backgroundImage: "url('./images/moreInfo5.png')",
        }}>
          <div style={styles.textTitle}>Cảm Ơn Sự Ủng Hộ Và Tinh Thần Hành Động Của Bạn.</div>
          <div style={styles.textTitleSmall}>Nhân viên của Prudential tại quầy sẽ hướng dẫn bạn các bước tiếp theo
          </div>
        </div>

      </AwesomeSlider>

      <div style={commonStyle.footer}>
        <Button style={{...commonStyle.bottomButton, display: ''}}
                onClick={() => routeChange()}
                ref={t => btnRef = t}
        >
          Cùng tiếp tục hành trình nhé</Button>

        <Button style={{...commonStyle.bottomButton, display: 'none'}}
                onClick={() => routeChange()}
                ref={t => btnDoneRef = t}
        >
          Hoàn thành</Button>
      </div>

    </div>
  );
};

const MoreInfoContainer = compose(
  connect(
    selectors.root,
    {
      endFlow: actions.endFlow
    }
  ),
  lifecycle({
    componentWillMount() {

    }
  })
)(MoreInfo);

export default MoreInfoContainer;
