import React from 'react';
import * as Const from "../../constants/Const"
import * as Routes from "../../constants/routes"
import commonStyles, {colors} from "../common"
import {Button} from '@material-ui/core';
import {selectedGift} from "../../redux/selectors";

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
    backgroundImage: "url('./images/background_global.png')",
  },

  imageResult: {
    width: '25%',
    paddingTop: '10%'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
  },

  loading: {
    transform: "rotate(864deg)",
    transition: 'transform 4s',
    transitionTimingFunction: 'ease-out'
  },

  text: {
    fontSize: '3.5vh', 
    width: '80%',
    color: colors.pruRed,
    margin: 'auto'
  }
};

const calculateDegree = (selectedGift) => {
  console.log("calculate", selectedGift);
  const range = Const.GiftOutDegree[selectedGift];
  console.log("calculate range", range);
  const position = Math.floor(Math.random() * range.length);
  console.log("calculate position", range[position]);
  return range[position];
};

const LoadingSpinner = ({isLoading, onClickSpinner, selectedGift}) => (
  <div className="container">
    <div style={{...commonStyles.textNormal_bold, ...styles.text}}>Cùng Prudential sử dụng vật dụng thân thiện với môi trường nhé!
    </div>
    <div style={{...commonStyles.textNormal_bold, ...styles.text, fontSize: '2.5vh', paddingTop: '4vh', color: colors.pruGrey}}>Nhấp vào vòng quay để nhận 01 món quà thay thế đồ nhựa hàng ngày
    </div>
    <img className={isLoading? `loading loading-${calculateDegree(selectedGift)}` : ""} style={styles.image}
         src="./images/loading.png"
         onClick={onClickSpinner}
    />
    <img style={styles.imageSpinner}
         src="./images/spinner.png"
         onClick={onClickSpinner}
    />
  </div>
);

const LuckyDraw = ({isLoading, onClickSpinner, selectedGift}) => (
  <div className="container" style={{...commonStyles.container, ...styles.backGroundLucky, ...styles.container}}>
    <LoadingSpinner {...{isLoading, onClickSpinner, selectedGift}}/>
  </div>
);


export default LuckyDraw;