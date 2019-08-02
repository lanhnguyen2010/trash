import React, {Component} from 'react';
import * as ROUTES from "../../constants/routes";

import {Button} from '@material-ui/core';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import commonStyles from "../common"


const styles = {
  text: {
    position:"relative",
    fontSize: 35,
    textAlign:"center",
    width: "74%",
    margin: "2%",
    marginBottom:"4%",
    marginLeft:"13%"
  },
  button: {
    position:"relative",
    alignSelf: "center",
    backgroundColor: '#D20C08',
    fontSize: 22,
    width: "74%",
    borderRadius: 50,
    margin:'1%'
  },
  logo: {
    position:"fixed",
    zIndex: 100,
    top: '2.5vh',
    left: '2.5vh',
    height: '7vh'
  },
  label: {
    position: "fixed",
    zIndex: 100,
    left: 0,
    height: "auto%",
    width: "68%"
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
  }
};

export default class Home extends Component {

  componentDidMount() {
    this.interval = setInterval(() => this.track.clickNext(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  routeChange() {
    this.props.history.push(ROUTES.HELLO);
  }

  render() {
    return (
      <div className="container">
        <AwesomeSlider style={{width: '100%', height:'100%', position:'absolute'}}
                       bullets={false}
                       infinite={true}
                       organicArrows={false}
                       ref={t => this.track = t}>

          <div style={{
            ...styles.image,
            backgroundImage: "url('./images/home1.jpg')",
          }}>

          </div>
          <div style={{
            ...styles.image,
            backgroundImage: "url('./images/home2.jpg')",
            backgroundPosition: 'bottom'
          }}>
            <img src="./images/logo.jpg" alt="prudential logo" style={styles.logo}/>
          </div>
          <div style={{
            ...styles.image,
            backgroundImage: "url('./images/home3.jpg')",
          }}>
          </div>
          <div style={{
            ...styles.image,
            backgroundImage: "url('./images/home4.jpg')",
            backgroundPosition: 'bottom'
          }}>
            <img src="./images/logo.jpg" alt="prudential logo" style={styles.logo}/>
          </div>
        </AwesomeSlider>
        <div style={commonStyles.footer}>
          <Button style={commonStyles.bottomButton}
                  onClick={() => this.routeChange()}>
            Câu trả lời ở đây</Button>
        </div>
      </div>
    );
  }
}