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
import {loadState} from "../../localStoragePersist";


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
    backgroundImage: "url('https://drive.google.com/uc?id=1gzT65Fna4N5x6kRqYeueR4fqhLwJobD3'",
    backgroundSize: 'cover',
    alignItems: 'unset',
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
    position: "fixed",
    zIndex: 100,
    top: '5vh',
    left: '5vh',
    height: '7vh'
  },
};

const MoreInfo = ({history, endFlow, text, updateText}) => {
  let trackRef;
  let btnRef;
  let btnDoneRef;
  const routeChange = () => {
    // if (trackRef.index >= 2) {
    //   setTimeout(function () {
    //     btnRef.style.display = 'none';
    //     btnDoneRef.style.display = '';
    //   }.bind(this), 300)
    // }

    console.log("routeChange", trackRef.index);
    if (trackRef.index === 4) {
      btnRef.style.display = 'none';
    } else if (trackRef.index >= 3) {
      setTimeout(function () {
        updateText("Tôi chọn giảm dùng nhựa")
      }.bind(this), 300)
    } else if (trackRef.index >= 2){
      setTimeout(function () {
        updateText("Hoàn thành")
      }.bind(this), 300)
    }
    trackRef.clickNext();


    if (trackRef.index === 4) {
      setTimeout(function () {
        endFlow();
        history.push(ROUTES.HOME)
      }.bind(this), 3000)
    }
  };

  const ImageUrl = {
    moreInfo1: "url('https://drive.google.com/uc?id=180KIt4pYvt-7ALB0k1ecyfZq1otKJPRF')",
    moreInfo2: "url('https://drive.google.com/uc?id=1cg8Ih7uxdmQs49KhZumsr4Hwd6g82yV0')",
    moreInfo3: "url('https://drive.google.com/uc?id=1whPUVfjsH17FBXR7Daa6bLqLj_zhFb1-')",
    moreInfo4: "url('https://drive.google.com/uc?id=169iTF04SgfrBLvLw6TomH0Nrzp8ntiuO')",
    moreInfo5: "url('https://drive.google.com/uc?id=1gzT65Fna4N5x6kRqYeueR4fqhLwJobD3')",
    moreInfo6: "url('https://drive.google.com/uc?id=1mGUYxVtp6tjDaOn5UZnIJM-Vy1fdSLQh')",
  };

  return (
    <div className="container">
      <AwesomeSlider style={{width: '100%', height: '100%', position: 'absolute', pointerEvents: 'none'}}
                     bullets={false}
                     organicArrows={false}
                     ref={t => trackRef = t}>
        <div style={{
          ...styles.image,
          backgroundPosition: 'bottom',
          backgroundImage: ImageUrl.moreInfo1,
        }}>
          <img src="./images/logo.png" alt="prudential logo" style={styles.logo}/>
        </div>
        <div style={{
          ...styles.image,
          backgroundImage: ImageUrl.moreInfo2,
        }}>
          <img src="./images/logo.png" alt="prudential logo" style={styles.logo}/>
        </div>
        <div style={{
          ...styles.image,
          backgroundImage: ImageUrl.moreInfo3,
        }}>
          <img src="./images/logo.png" alt="prudential logo" style={styles.logo}/>
        </div>
        <div style={{
          ...styles.image,
          backgroundImage: ImageUrl.moreInfo4,
          backgroundPosition: 'bottom'
        }}>
          <img src="./images/logo.png" alt="prudential logo" style={styles.logo}/>

          {/*<div style={commonStyle.footer}>*/}
            {/*<Button style={commonStyle.bottomButton}*/}
                    {/*onClick={() => routeChange()}*/}
                    {/*ref={t => btnDoneRef = t}*/}
            {/*>*/}
              {/*Hoàn thành</Button>*/}
          {/*</div>*/}
        </div>

        {/*<div style={{*/}
          {/*...styles.image,*/}
          {/*backgroundPosition: 'bottom',*/}
          {/*backgroundImagCe: "url('./images/moreInfo5.jpg')"*/}
        {/*}} onClick={() => routeChange()}*/}
        {/*>*/}
          {/*<div style={styles.textTitleSmall}>Cùng Prudential hành động</div>*/}
          {/*<div style={styles.textTitle}>Chọn giảm dùng nhựa</div>*/}
          {/*<div style={styles.textTitleSmall}>Vì sức khoẻ của những người thân yêu</div>*/}

          {/*<div style={commonStyle.footer}>*/}
            {/*<Button style={{...commonStyle.bottomButton}} onClick={() => routeChange()}>*/}
            {/*Tôi chọn giảm dùng nhựa*/}
            {/*</Button>*/}
          {/*</div>*/}
        {/*</div>*/}

        <div style={{
          ...styles.image,
          // backgroundPosition: 'bottom',
          backgroundImage: ImageUrl.moreInfo5,
        }}>
          {/*<div style={commonStyle.footer}>*/}
          {/*<Button style={{...commonStyle.bottomButton}} onClick={() => routeChange()}>*/}
          {/*Tôi chọn giảm dùng nhựa*/}
          {/*</Button>*/}
          {/*</div>*/}
        </div>

        <div style={{
          ...styles.image,
          backgroundPosition: 'center',
          backgroundImage: ImageUrl.moreInfo6,
        }}>
        </div>


      </AwesomeSlider>

      <div style={commonStyle.footer}>
        {/*<Button style={{...commonStyle.bottomButton, display: 'none'}}*/}
                {/*onClick={() => routeChange()}*/}
                {/*ref={t => btnDoneRef = t}*/}
        {/*>*/}
          {/*Hoàn thành</Button>*/}
        <Button style={commonStyle.bottomButton}
                onClick={() => routeChange()}
                ref={t => btnRef = t}
        >{text}</Button>
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
      const initState = {
        text: "Tiếp theo",
        updateText: ((text) => {
          this.setState({...this.props.state, text:text});
        })
      };
      this.setState(initState);
    }
  })
)(MoreInfo);

export default MoreInfoContainer;
