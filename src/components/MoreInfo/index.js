import React, {Component} from 'react';
import * as ROUTES from "../../constants/routes";

import {Button} from '@material-ui/core';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "white",
  },
  text: {
    bottom:"15vh",
    position:"relative",
    color: "#BA0000",
    fontSize: 30,
    textAlign:"center",
    width: "74%"
  },
  button: {
    position:"fixed",
    bottom:"7%",
    alignSelf: "center",
    backgroundColor: '#D20C08',
    fontSize: 25,
    width: "70%",
    borderRadius: 50
  },
  logo: {
    position:"fixed",
    zIndex: 100,
    top: 30,
    left: 30
  }
};

export default class MoreInfo extends Component {
  componentDidMount() {
  }

  componentWillUnmount() {
    const {history, isLoggedIn} = this.props;
    if (!isLoggedIn) {
      history.push(ROUTES.LOG_IN)
    }
  }

  routeChange() {
    this.track.clickNext();
    console.log("track", this.track.index);
    if (this.track.index === 3) {
      this.props.history.push(ROUTES.OTP);
    }
  }

  render() {
    return (
      <div className="container">
        <img src="./images/logo.svg" alt="prudential logo" style={styles.logo}/>
        <AwesomeSlider style={{width: '100%', height:'100%'}}
                       bullets={false}
                       organicArrows={false}
                       ref={t => this.track = t}>
          <div data-src='./images/home1.png'/>
          <div data-src='./images/home2.png'/>
          <div data-src='./images/home3.png'/>
          <div data-src='./images/home4.png'/>
        </AwesomeSlider>
        <div style={styles.footer}>
          <Button style={styles.button}
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => this.routeChange()}>
            Tìm hiểu thêm</Button>
        </div>
      </div>
    );
  }
}