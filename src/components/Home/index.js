import React, {Component} from 'react';
import * as ROUTES from "../../constants/routes";

import {Button} from '@material-ui/core';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const styles = {
  footer: {
    position: "absolute", bottom: 0, zIndex: 100, display: "flex", justifyContent: "center", width: "100%"
  }
};

export default class Home extends Component {
  componentDidMount() {
    console.log(this.track);
    this.interval = setInterval(() => this.track.clickNext(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="container">
        <div style={styles.footer}>
          <Button style={{minWidth: "70%", alignSelf: "center"}}>Tim hieu ngay</Button>
        </div>
        <AwesomeSlider fillParent={true} bullets={true} infinite={true} ref={t => this.track = t}>
          <div style={{backgroundColor: '#2d5182'}}>1</div>
          <div style={{backgroundColor: '#5fb7b2'}}>2</div>
          <div style={{backgroundColor: '#fcd0a8'}}>3</div>
          <div style={{backgroundColor: 'red'}}>4</div>
        </AwesomeSlider>

      </div>
    );
  }
}