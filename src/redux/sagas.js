import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";

import { actions, Types } from "./actions";
import firebaseService from "../components/Firebase";
import * as ROUTES from "../constants/routes";
import React from 'react';
import * as selectors from './selectors'

const SMS_API_KEY="60F486560907DE73746D199F8EF80A";
const SMS_SECRET_KEY="4F784074A243ED85FBAB849CAA3BF5";
const SMS_BRANDNAME="QCAO_ONLINE";

function* loadData() {
  console.log("loadData");
  yield put(actions.updateData(3));
}

function* doLogin({navigation, email, password}) {
  try {
    const user = yield call(firebaseService.auth.signInWithEmailAndPassword, email, password);
    console.log(user);
    const city = yield call(firebaseService.database.read, "users/" + user.user.uid);
    console.log(city);
    if(city != null) {
      yield put(actions.updateIsLoggedIn(true));
      yield put(actions.updateCity(city));
    } else{
      window.alert("Account không thuộc về thành phố nào, chuyển mặc định về Hồ Chính Minh");
      yield put(actions.updateCity('Ho Chi Minh'));
    }
    navigation.push(ROUTES.HOME);
  } catch (error) {
    window.alert(error.message)
  }
}

function* doSignUp({navigation, email, password, confirmPassword, city}) {
  try {
    if (password ===  confirmPassword) {
      const user = yield call(firebaseService.auth.createUserWithEmailAndPassword, email, password, city);
      yield call(firebaseService.database.update, "users/"+user.user.uid, city);
      navigation.push(ROUTES.HOME);
    }
    else{
      window.alert("Password and Confirm Password must be same");
    }
  } catch (error) {
    window.alert(error.message)

    //yield put(loginWithEmailFailure(error));
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function* getRandomGift() {
  //TODO random function
  console.log("getRandomGif");
  const giftsQuantity = {
    onghutinox: 2,
    tuivai: 3,
    daonia: 3,
    onghutgao: 2,
    binhthuytinh: 1,
  };

  let buildGiftsArray = [];
  for (let key in giftsQuantity) {
    for (let i = 0; i < giftsQuantity[key]; i++) {
      buildGiftsArray.push(key);
    }
  }
  shuffleArray(buildGiftsArray);
  console.log("shuffle buildGiftArray", buildGiftsArray);
  const randomIndex = Math.floor(Math.random() * (buildGiftsArray.length));
  const selectedGift = buildGiftsArray[randomIndex];
  console.log(selectedGift);
  yield put(actions.updateSelectedGift(selectedGift));
}

function* updateGift({navigation, data}) {
  console.log(data)
  try {
    const booth =
      {
        onghutinox: data.onghutinox > 0 ? data.onghutinox : 0,
        tuivai: data.tuivai > 0 ? data.tuivai : 0,
        daonia: data.daonia > 0 ? data.daonia : 0,
        onghutgao: data.onghutgao > 0 ? data.onghutgao : 0,
        binhthuytinh: data.binhthuytinh > 0 ? data.binhthuytinh : 0,
      };
    const result = yield call(firebaseService.database.create, "booths/" + data.city + '/' + data.date, booth);
    console.log("Successful update Gift: ", result);
  } catch (error) {
    window.alert(error.message)
  }
}

function* getGifts({city}) {
  try {
    const result = yield call(firebaseService.database.read, "booths/" + city);

    console.log("Get Gifts", result);
    let dateGifts = [];
    for (let key in result) {
      if (result.hasOwnProperty(key)) {
        console.log(key + " -> " + result[key]);
        let dateGift = '';
        let gifts = result[key];
        for(let keySnap in gifts){
          if (gifts.hasOwnProperty(keySnap)) {
            console.log(keySnap + " -> " + gifts[keySnap]);
            dateGift = gifts[keySnap];
          }
        }
        dateGift["date"] = key;
        dateGifts.push(dateGift)
      }
    }
    console.log("date gifts: ", dateGifts);
    yield put(actions.updateBoothsData(dateGifts));
  } catch (error) {
    window.alert(error.message)
  }
}

function* getAllOtps({searchPhoneNumber}) {
  try {
    console.log("Get Otps .....");

    let city = yield select(selectors.city);
    console.log("Get Otps city.....", city);

    const result = yield call(firebaseService.database.read, "otps/" + city + "/" + searchPhoneNumber);

    console.log("Get Otps", result);
    let otps = [];
    otps.push({phoneNumber: searchPhoneNumber, otp: result});

    console.log("date gifts: ", otps);
    yield put(actions.updateOtpList(otps));
  } catch (error) {
    window.alert(error.message)
  }
}

function generateOTP() {
  let digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 4; i++ ) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

const sendRequest = async(path) =>{
  const result = await fetch(path, {headers:{
      "Content-Type":"application/json"
    }});
  return await result.json();
};

function* doOtp({navigation, data}) {
  try {
    console.log(data);
    yield put(actions.updatePhoneNumber(data.phoneNumber));
    let otp = generateOTP();
    let city = yield select(selectors.city);
    yield call(firebaseService.database.update, "otps/" + city + "/" + data.phoneNumber, otp);
    yield call(firebaseService.database.update, "players/"+ city + "/" + data.phoneNumber, data);
    const params=`Phone=${data.phoneNumber}&Content=${otp}&ApiKey=${SMS_API_KEY}&SecretKey=${SMS_SECRET_KEY}&IsUnicode=false&Brandname=${SMS_BRANDNAME}&SmsType=2&Sandbox=1`;
    const response = yield call(sendRequest, `https://restapi.esms.vn/MainService.svc/json/SendMultipleMessage_V4_get?${params}`);
    console.log(response);
    if(response.CodeResult == 100){
      navigation.push(ROUTES.VERIFY_OTP)
    }else{
      window.alert(response.ErrorMessage)
    }
    //navigation.push(ROUTES.HOME);
  } catch (error) {
    window.alert(error.message)
  }
}

function* doVerifyOtp({navigation, phoneNumber, otp}) {
  console.log("otp: ", otp);
  let city = yield select(selectors.city);

  try {
    const response = yield call(firebaseService.database.read, "otps/" + city + "/" + phoneNumber);
    if(otp == response) {
      navigation.push(ROUTES.LUCKY_DRAW);
    }else {
      window.alert("Mã Xác Thực không chính xác");
    }
  } catch (error) {
    window.alert(error.message)
  }
}

function* checkSmsAccountBalance({navigation}) {
  try {
    console.log("Check SMS account Balance");

    const response = yield call(sendRequest, `https://restapi.esms.vn/MainService.svc/json/GetBalance/${SMS_API_KEY}/${SMS_SECRET_KEY}`);
    console.log(response);
    if(response.CodeResponse === "100"){
      console.log("Account Balance: ", response.Balance);
      yield put(actions.updateSmsBalance(response.Balance))
    }
    //navigation.push(ROUTES.HOME);
  } catch (error) {
    window.alert(error.message)
  }
}
function* rootSaga() {
  yield takeEvery(Types.DO_LOGIN, doLogin);
  yield takeEvery(Types.LOAD_DATA, loadData);
  yield takeLatest(Types.GET_RANDOM_GIFT, getRandomGift);
  yield takeEvery(Types.UPDATE_GIFT, updateGift);
  yield takeEvery(Types.GET_GIFTS, getGifts);
  yield takeEvery(Types.DO_SIGN_UP, doSignUp);
  yield takeEvery(Types.DO_OTP, doOtp);
  yield takeEvery(Types.DO_VERIFY_OTP, doVerifyOtp);
  yield takeEvery(Types.CHECK_SMS_ACCOUNT_BALANCE, checkSmsAccountBalance);
  yield takeEvery(Types.GET_ALL_OTPS, getAllOtps);

}

export { rootSaga };
