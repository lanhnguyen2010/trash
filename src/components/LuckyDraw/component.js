import React from 'react';
import * as Const from "../../constants/Const"
import * as Routes from "../../constants/routes"
import commonStyles from "../common"
import {Button} from '@material-ui/core';

const styles = {
  image: {
    width: '70%',
    paddingTop: 50
  },
  backGroundLucky: {
    backgroundImage: "url('./images/player_info_background.png')",
  },
  backGroundResult: {
    backgroundImage: "url('./images/result_background.png')",
  },
  imageResult:{
    width: '40%',
    paddingTop: '10%'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
};

const finish = ({history, endFlow}) => {
  endFlow();
  history.push(Routes.HOME);

};

const LoadingSpinner = ({isLoading, onClickSpinner}) => (
  <div className="container" style={{...commonStyles.container, ...styles.backGroundLucky}}>
    <div style={commonStyles.topText}>CẢM ƠN BẠN ĐÃ GIẢM DÙNG ĐỒ NHỰA VÌ SỨC KHỎE NGƯỜI THÂN YÊU</div>
    <img className={isLoading ? "loading" : ""} style={styles.image}
         src="./images/loading.png"
         onClick={onClickSpinner}
    />
  </div>
);

const ResultView = ({selectedGift, history, endFlow}) => (
  <div className="container"  style={styles.container}>
    <img src={Const.GiftResource[selectedGift].image} style={styles.imageResult}/>
    <div style={commonStyles.topText}>CHÚC MỪNG BẠN ĐÃ NHẬN ĐƯỢC {Const.GiftResource[selectedGift].label} TỪ PRUDENTIAL</div>
    <div style={commonStyles.topText}>CẢM ƠN BẠN ĐÃ THAM GIA CHƯƠNG TRÌNH</div>
    <Button style={commonStyles.button} onClick={() => finish({history, endFlow})}>Hoàn thành</Button>
  </div>
);

const LuckyDraw = ({isLoading, onClickSpinner, selectedGift, history, endFlow}) => (
  <div className="container" style={{...commonStyles.container, ...styles.backGroundResult}}>
    {!selectedGift ? <LoadingSpinner {...{isLoading, onClickSpinner}}/> : <ResultView {...{selectedGift, history, endFlow}}/>}

  </div>
);


export default LuckyDraw;