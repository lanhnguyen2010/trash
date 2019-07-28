import React from 'react';
import * as Const from "../../constants/Const"
import commonStyles from "../common"

const styles = {
  image: {
    width: 500, height: 500
  }
};

const LoadingSpinner = ({isLoading, onClickSpinner}) => (
  <div className="container">
    <div>Cam on ban da giam dung do nhua vi suc khoe nguoi than yeu</div>
    <img className={isLoading ? "loading" : ""} style={styles.image}
         src="./images/loading.svg"
         onClick={onClickSpinner}
    />
  </div>
);

const ResultView = ({selectedGift}) => (
  <div className="container">
    <img src={Const.GiftResource[selectedGift].image} style={{width: 100, height: 100}}/>
    <div>CHUC MUNG BAN DA NHAN DUOC {Const.GiftResource[selectedGift].label} TU PRUDENTIAL</div>
    <div>cam on ban da tham gia chuong trinhL</div>
  </div>
);

const LuckyDraw = ({isLoading, onClickSpinner, selectedGift}) => (
  <div className="container">
    {!selectedGift ? <LoadingSpinner {...{isLoading, onClickSpinner}}/> : <ResultView {...{selectedGift}}/>}

  </div>
);


export default LuckyDraw;