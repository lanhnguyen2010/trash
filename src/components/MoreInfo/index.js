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
  text: {
    ...commonStyle.textNormal_bold,
    color: "#D20C08",
    fontSize: '2.5vh'
  },
  textBlack: {
    ...commonStyle.textNormal_bold,
    color: "black",
    fontSize: '2.5vh',
  },
  textEnd: {
    ...commonStyle.textNormal_bold,
    color: "#D20C08",
    fontSize: '3vh',
  },
  textBlackEnd: {
    ...commonStyle.textNormal_bold,
    color: "black",
    fontSize: '2.5vh',
    fontFamily: fonts.regular,
    marginTop: 30
  },

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
    marginBottom: '4%'
  },
  image: {
    width: '33.3%',
    backgroundPosition: '50% 50%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  }
};

const MoreInfo = ({history, endFlow}) => {
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

        <div data-src='./images/home1.png'/>
        <div data-src='./images/home2.png'/>
        <div data-src='./images/home3.png'/>
        <div data-src='./images/home4.png'/>

        <div data-src='./images/moreInfo5.png'>
          <div style={{...commonStyle.footer, flexDirection: 'row', background: 'white'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: "70%", padding: 30}}>
              <div style={styles.textBlack}>Chung Tay Cùng Prudential Cam Kết</div>
              <div style={styles.text}>"Chọn Giảm Dùng Nhựa Vì Sức Khoẻ Của Những Người Thân Yêu"</div>

              <Button style={{...commonStyle.bottomButton, ...styles.pruButton}} onClick={() => routeChange()}>Tiếp
                tục</Button>
            </div>

            <div style={{...styles.image, backgroundImage: "url('./images/pru_logo.png')"}}/>
          </div>
        </div>

        <div data-src='./images/moreInfo5.png'>
          <div style={{...commonStyle.footer, background: 'white'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: "75%", padding: 40}}>
              <div style={styles.textEnd}>Cảm Ơn Sự Ủng Hộ Và Tinh Thần Hành Động Của Bạn.</div>
              <div style={styles.textBlackEnd}>Nhân viên của Prudential tại quầy sẽ hướng dẫn bạn các bước tiếp theo
              </div>
            </div>
          </div>
        </div>

      </AwesomeSlider>

      <div style={commonStyle.footer}>
        <Button style={{...commonStyle.bottomButton}}
                onClick={() => routeChange()}
                ref={t => btnRef = t}
        >
          Tiếp tục</Button>
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
