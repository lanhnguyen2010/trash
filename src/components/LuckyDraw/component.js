import React from 'react';
import * as Const from "../../constants/Const"
import * as Routes from "../../constants/routes"
import commonStyles from "../common"
import {Button} from '@material-ui/core';

const styles = {
  image: {
    width: '70%',
    marginTop: 50
  },
  imageSpinner: {
    width: '8%',
    marginTop: 60,
    position: 'absolute',
    left: '69%'
  },
  backGroundLucky: {
    backgroundImage: "url('./images/player_info_background.png')",
  },
  backGroundResult: {
    backgroundImage: "url('./images/result_background.png')",
  },
  imageResult:{
    width: '25%',
    paddingTop: '10%'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};


const LoadingSpinner = ({isLoading, onClickSpinner}) => (
  <div className="container" >
    <div style={{...commonStyles.textNormal_bold, fontSize:'3.5vh', width:'80%', margin: 'auto'}}>CẢM ƠN BẠN ĐÃ GIẢM DÙNG ĐỒ NHỰA VÌ SỨC KHỎE NGƯỜI THÂN YÊU</div>

    <img className={isLoading ? "loading" : ""} style={styles.image}
         src="./images/loading.png"
         onClick={onClickSpinner}
    />
    <img style={styles.imageSpinner}
         src="./images/spinner.png"
         onClick={onClickSpinner}
    />
  </div>
);

const LuckyDraw = ({isLoading, onClickSpinner}) => (
  <div className="container" style={{...commonStyles.container, ...styles.backGroundLucky, ...styles.container}}>
    <LoadingSpinner {...{isLoading, onClickSpinner}}/>
  </div>
);


export default LuckyDraw;