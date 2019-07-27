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
    height: "20%",
    backgroundColor: "white",
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
      <Container>
        <AwesomeSlider style={{width: '100%', height:'100%'}}
                       bullets={false}
                       infinite={true}
                       organicArrows={false}
                       ref={t => this.track = t}>
          <div><img src="./images/Home1.svg"/></div>
          <div style={{backgroundColor: '#5fb7b2'}}>2</div>
          <div style={{backgroundColor: '#fcd0a8'}}>3</div>
          <div><img src="./images/Home1.svg"/></div>
        </AwesomeSlider>
        <div style={styles.footer}>
          <Fab style={{ alignSelf: "center", backgroundColor: '#D20C08', width: "20%"}} 
                  variant='extended'
                  color='primary'
                  size='large'
                  onClick={() => this.routeChange()}>
            Tìm hiểu thêm</Fab>
        </div> 
      </Container>
    );
  }
}