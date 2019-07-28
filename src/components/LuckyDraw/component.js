import React from 'react';
import * as Const from "../../constants/Const"
import commonStyles from "../common"

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

const LoadingSpinner = ({isLoading, onClickSpinner}) => (
  <div className="container" style={{...commonStyles.container, ...styles.backGroundLucky}}>
    <div style={commonStyles.topText}>CẢM ƠN BẠN ĐÃ GIẢM DÙNG ĐỒ NHỰA VÌ SỨC KHỎE NGƯỜI THÂN YÊU</div>
    <img className={isLoading ? "loading" : ""} style={styles.image}
         src="./images/loading.png"
         onClick={onClickSpinner}
    />
  </div>
);

const ResultView = ({selectedGift}) => (
  <div className="container"  style={styles.container}>
    <img src={Const.GiftResource[selectedGift].image} style={styles.imageResult}/>
    <div style={commonStyles.topText}>CHÚC MỪNG BẠN ĐÃ NHẬN ĐƯỢC {Const.GiftResource[selectedGift].label} TỪ PRUDENTIAL</div>
    <div style={commonStyles.topText}>CẢM ƠN BẠN ĐÃ THAM GIA CHƯƠNG TRÌNH</div>
  </div>
);

const LuckyDraw = ({isLoading, onClickSpinner, selectedGift}) => (
  <div className="container" style={{...commonStyles.container, ...styles.backGroundResult}}>
    {!selectedGift ? <LoadingSpinner {...{isLoading, onClickSpinner}}/> : <ResultView {...{selectedGift}}/>}

  </div>
);


export default LuckyDraw;