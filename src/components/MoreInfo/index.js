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
  let btnDoneRef;
  const routeChange = () => {
    if (trackRef.index >= 2) {
      setTimeout(function () {
        btnRef.style.display = 'none';
      }.bind(this), 300)
    }

    trackRef.clickNext();


    if (trackRef.index == 4) {
      setTimeout(function () {
        endFlow();
        history.push(ROUTES.HOME)
      }.bind(this), 3000)
    }
  };

  return (
    <div className="container">
      <AwesomeSlider style={{width: '100%', height: '100%', position: 'absolute'}}
                     bullets={false}
                     organicArrows={false}
                     ref={t => trackRef = t}>
       
        <div style={{
          ...styles.image,
          backgroundImage: "url('./images/moreInfo1.jpg')",
        }}/>
        <div style={{
          ...styles.image,
          backgroundImage: "url('./images/moreInfo2.jpg')",
        }}/>
        <div style={{
          ...styles.image,
          backgroundImage: "url('./images/moreInfo3.jpg')",
        }}/>
        <div style={{
          ...styles.image,
          backgroundImage: "url('./images/moreInfo4.jpg')",
        }}>
          <div style={commonStyle.footer}>
            <Button style={{...commonStyle.bottomButton, ...styles.pruButton}}
                    onClick={() => routeChange()}
                    ref={t => btnDoneRef = t}
            >
              Hoàn thành</Button>
          </div>
        </div>

        <div style={{
          ...styles.image,
          backgroundImage: "url('./images/moreInfo5.jpg')"
        }}>
          <div style={commonStyle.footer}>
            <Button style={{...commonStyle.bottomButton, ...styles.pruButton}} onClick={() => routeChange()}>
              Tôi chọn giảm dùng nhựa
            </Button>
          </div>
        </div>

        <div style={{
          ...styles.image,
          backgroundImage: "url('./images/moreInfo6.jpg')",
        }}>
        </div>

      </AwesomeSlider>

      <div style={commonStyle.footer}>
        <Button style={{...commonStyle.bottomButton, display: ''}}
                onClick={() => routeChange()}
                ref={t => btnRef = t}
        >
          Cùng tiếp tục hành trình nhé</Button>


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
