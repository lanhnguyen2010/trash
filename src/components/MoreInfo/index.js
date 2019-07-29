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
    bottom: "15vh",
    position: "relative",
    color: "#BA0000",
    fontSize: 30,
    textAlign: "center",
    width: "74%"
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
    width: '70%'
  },
  logo: {
    position: "fixed",
    zIndex: 100,
    top: 30,
    left: 30
  }
};

const PageConfirm = () => (
  <div data-src='./images/home2.png' style={{...styles.footer, flexDirection: 'column'}}>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div>Chung tay cùng prudential cam kết</div>
      <div>Chọn giảm dùng nhựa vì sức khoẻ của những người thân yêu</div>


    </div>


  </div>
);

const MoreInfo = ({history}) => {
  let trackRef;
  let btnRef;
  let logoRef;
  const routeChange = () => {
    trackRef.clickNext();
    console.log("track", trackRef.index);
    if (trackRef.index >= 0) {
      btnRef.style.display = 'none';
      logoRef.style.display = 'none'
    }
  };

  return (
    <div className="container">
      <img src="./images/logo.svg" alt="prudential logo" style={styles.logo} ref={t => logoRef = t}/>
      <AwesomeSlider style={{width: '100%', height: '100%'}}
                     bullets={false}
                     organicArrows={false}
                     ref={t => trackRef = t}>
        <div data-src='./images/home1.png'/>
        {/*<div data-src='./images/home2.png'/>*/}
        {/*<div data-src='./images/home3.png'/>*/}
        {/*<div data-src='./images/home4.png'/>*/}
        <div data-src='./images/home2.png'>
          <div style={{...styles.footer, flexDirection: 'row', background: 'white'}}>
            <div style={{display: 'flex', flexDirection: 'column', width:"70%"}}>
              <div>Chung tay cùng prudential cam kết</div>
              <div>Chọn giảm dùng nhựa vì sức khoẻ của những người thân yêu</div>

              <Button onClick={() => routeChange()}>Tiếp tục</Button>
            </div>

            <img src="./images/logo.svg"/>
          </div>
        </div>

        <div data-src='./images/home2.png'>
          <div style={{...styles.footer, flexDirection: 'column', background: 'white'}}>
              <div>Cảm Ơn Sự Ủng Hộ Và Tinh Thần Hành Động Của Bạn</div>
              <div>Nhân viên của Prudential tại quầy sẽ hướng dẫn bạn làm các bước tiếp theo</div>

              <Button onClick={()=> history.push(ROUTES.OTP)}>End</Button>

          </div>
        </div>

      </AwesomeSlider>
      <div style={styles.footer}>
        <Button style={styles.button}
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
