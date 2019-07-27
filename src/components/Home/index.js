import React, {Component} from 'react';
import * as ROUTES from "../../constants/routes";

import {Button, Container, Fab} from '@material-ui/core';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Link } from "react-router-dom";


const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "30vh",
    backgroundColor: "white",
  },
  text: {
    position:"absolute", 
    bottom:"15vh", 
    color: "#BA0000", 
    fontSize: "calc(1em + 2.5vw)", 
    textAlign:"center", 
    width: "74vw"
  }, 
  button: {
    position:"fixed", 
    bottom:"7vh", 
    alignSelf: "center", 
    backgroundColor: '#D20C08', 
    fontSize: "calc(1em + 0.8vh)",
    width: "74vw", 
    height:"6vh", 
    borderRadius: "50px"
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
    this.props.history.push(ROUTES.QUIZ);
  }

  render() {
    return (
      <div className="container">
        <AwesomeSlider style={{width: '100%', height:'100%'}}
                       bullets={false}
                       infinite={true}
                       organicArrows={false}
                       ref={t => this.track = t}>
          <div data-src='./images/home1.png'/>
          <div data-src='./images/home2.png'/>
          <div data-src='./images/home3.png'/>
          <div data-src='./images/home4.png'/>
        </AwesomeSlider>
        <div style={styles.footer}>
          <p style={styles.text}>Cái giá thật sự <b>CỦA NHỰA</b> bạn chưa biết</p>
          
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