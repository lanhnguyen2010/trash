import React from 'react';
import * as Const from "../../constants/Const"
import * as Routes from "../../constants/routes"
import commonStyles from "../common"
import {Button} from '@material-ui/core';

const styles = {
  image: {
    width: 500, height: 500
  }
};

const finish = ({history, endFlow}) => {
  endFlow();
  history.push(Routes.HOME);

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

const ResultView = ({selectedGift, history, endFlow}) => (
  <div className="container">
    <img src={Const.GiftResource[selectedGift].image} style={{width: 100, height: 100}}/>
    <div>CHUC MUNG BAN DA NHAN DUOC {Const.GiftResource[selectedGift].label} TU PRUDENTIAL</div>
    <div>cam on ban da tham gia chuong trinhL</div>

    <Button style={commonStyles.button} onClick={() => finish({history, endFlow})}>Hoàn thành</Button>
  </div>
);

const LuckyDraw = ({isLoading, onClickSpinner, selectedGift, history, endFlow}) => (
  <div className="container">
    {!selectedGift ? <LoadingSpinner {...{isLoading, onClickSpinner}}/> : <ResultView {...{selectedGift, history, endFlow}}/>}

  </div>
);


export default LuckyDraw;