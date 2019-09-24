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
  }
};

const ImageUrl = {
  home2: "url('https://drive.google.com/uc?id=1avS-if4iFMzL7R0Ibdgy6h2qNSoOTjmt')",
  home1: "url('https://drive.google.com/uc?id=1BXqNxA80xo2SWRfE1b0MxjU1Gd--3A6K')",
  home3: "url('https://drive.google.com/uc?id=1oycnxgPiZpdQiyfK-2jqg8pxh9OBigmR')",
  home4: "url('https://drive.google.com/uc?id=1tTZrOUJjnHvi135Pia310iwr-VkxPI4K')",
};

export default class Home extends Component {

  componentDidMount() {
    this.interval = setInterval(() => this.track.clickNext(), 3000);
    console.log("home",this.props);
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
            backgroundImage: ImageUrl.home2,
            backgroundPosition: 'bottom'
          }}>
            <img src="./images/logo.png" alt="prudential logo" style={styles.logo}/>
          </div>
          <div style={{
            ...styles.image,
            backgroundImage: ImageUrl.home1,
          }}>
            <img src="./images/logo.png" alt="prudential logo" style={styles.logo}/>
          </div>
          <div style={{
            ...styles.image,
            backgroundImage: ImageUrl.home3,
          }}>
            <img src="./images/logo.png" alt="prudential logo" style={styles.logo}/>
          </div>
          <div style={{
            ...styles.image,
            backgroundImage: ImageUrl.home4,
            backgroundPosition: 'bottom',
          }}>
            <img src="./images/logo.png" alt="prudential logo" style={styles.logo}/>
          </div>
        </AwesomeSlider>
        <div style={commonStyles.footer}>
          <Button style={commonStyles.bottomButton}
                  onClick={() => this.routeChange()}>
            Tìm hiểu tại đây</Button>
        </div>
      </div>
    );
  }
}