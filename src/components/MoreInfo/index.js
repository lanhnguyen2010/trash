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
import commonStyle, {fonts, colors} from "../common"


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
    paddingTop: '5%',
    paddingBottom: '7%',
  },
  textTitleSmall: {
    fontSize: '2.5vh',
    color: colors.pruGrey,
    fontFamily: fonts.bold,
    padding: '1vh',
    marginLeft: 'auto',
    maxWidth: '100%'
  },
  textTitle: {
    fontSize: '3.5vh',
    padding: '1vh',
    color: colors.pruRed,
    fontFamily: fonts.bold,
    marginLeft: 'auto',
    maxWidth: '100%'
  },
  textTitleSmallEnd: {
    fontSize: '2.5vh',
    color: colors.pruGrey,
    fontFamily: fonts.bold,
    padding: '1vh',
    marginLeft: 'auto',
    maxWidth: '75%'
  },
  textTitleEnd: {
    fontSize: '3.5vh',
    padding: '1vh',
    color: colors.pruRed,
    fontFamily: fonts.bold,
    marginLeft: 'auto',
    maxWidth: '75%'
  },
  logo: {
    position:"fixed",
    zIndex: 100,
    top: '5vh',
    left: '5vh',
    height: '7vh'
  },
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
          backgroundPosition:'bottom',
          backgroundImage: "url('./images/moreInfo1.jpg')",
        }}>
          <img src="./images/logo.jpg" alt="prudential logo" style={styles.logo}/>
        </div>
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
          backgroundPosition: 'bottom'
        }}>
          <img src="./images/logo.jpg" alt="prudential logo" style={styles.logo}/>

          <div style={commonStyle.footer}>
            <Button style={commonStyle.bottomButton}
                    onClick={() => routeChange()}
                    ref={t => btnDoneRef = t}
            >
              Hoàn thành</Button>
          </div>
        </div>

        <div style={{
          ...styles.image,
          backgroundImage: "url('./images/thanks.png')"
        }}>
          <div style={styles.textTitleSmall}>Cùng Prudential hành động</div>
          <div style={styles.textTitle}>Chọn giảm dùng nhựa</div>
          <div style={styles.textTitleSmall}>Vì sức khoẻ của những người thân yêu</div>

          <div style={commonStyle.footer}>
            <Button style={{...commonStyle.bottomButton, ...styles.pruButton}} onClick={() => routeChange()}>
              Tôi chọn giảm dùng nhựa
            </Button>
          </div>
        </div>

        <div style={{
          ...styles.image,
          backgroundImage: "url('./images/thanks.png')",
        }}>
          <div style={styles.textTitleEnd}>Cảm ơn bạn đã hành động cùng Prudential.</div>
          <div style={styles.textTitleSmallEnd}>
            Liên hệ nhân viên của Prudential để được hướng dẫn các bước tiếp theo.
          </div>
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
