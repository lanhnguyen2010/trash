import React, {Component} from 'react';
import * as ROUTES from "../../constants/routes";

import {Button} from '@material-ui/core';
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
    width: "100%"
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
        <div style={styles.footer}>
          <Button style={{minWidth: "70%", alignSelf: "center"}} onClick={() => this.routeChange()}>
            Tim hieu ngay</Button>
        </div>
        <AwesomeSlider style={{width: '100%', height:'100%'}}
                       bullets={false}
                       infinite={true}
                       organicArrows={false}
                       ref={t => this.track = t}>
          <div style={{backgroundColor: '#2d5182'}}>1</div>
          <div style={{backgroundColor: '#5fb7b2'}}>2</div>
          <div style={{backgroundColor: '#fcd0a8'}}>3</div>
          <div style={{backgroundColor: 'red'}}>4</div>
        </AwesomeSlider>

      </div>
    );
  }
}