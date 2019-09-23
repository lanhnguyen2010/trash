import {call, put, takeEvery, takeLatest, select} from "redux-saga/effects";
import moment from "moment";


import {actions, Types} from "./actions";
import firebaseService from "../components/Firebase";
import * as ROUTES from "../constants/routes";
import * as CONST from "../constants/Const";
import React from 'react';
import * as selectors from './selectors'

const SMS_API_KEY = "F4978B22B0F6EBC4C0270D5EFA2D0D";
const SMS_SECRET_KEY = "7AA38C072D3822BEA821562A8A896D";
const SMS_BRANDNAME = "Svoucher.vn";
let sandbox = 0
const numberGiftForOnePhoneNumber = 1;

function* loadData() {
  console.log("loadData");
  yield put(actions.updateData(3));
}

let fieldMap = {
  phoneNumber: "Số Điện Thoại",
  email: "Email",
  name: "Tên",
  birthDay: 'Ngày Sinh',
  gender: 'Giới Tính'
};

const giftType = {
  kahoot: 'Game Kahoot',
  giftOnly: 'Nhận Quà',
  luckyDraw: 'Lucky Draw',
  giftQuickAnswer: 'Trả lời nhanh'
};

function* doLogin({navigation, email, password}) {
  const isLogging = yield select(selectors.isLogging);
  if (isLogging) return;

  yield put(actions.updateLoggingIn(true));
  try {
    const user = yield call(firebaseService.auth.signInWithEmailAndPassword, email, password);
    console.log(user);
    const city = yield call(firebaseService.database.read, "users/" + user.user.uid);
    console.log(city);
    if (city != null) {
      yield put(actions.updateIsLoggedIn(true));
      yield put(actions.updateCity(city));
    } else {
      window.alert("Account không thuộc về thành phố nào, chuyển mặc định về Hồ Chính Minh");
      yield put(actions.updateCity('Ho Chi Minh'));
    }
    yield put(actions.updateLoggingIn(false));
    navigation.push(ROUTES.HOME);
  } catch (error) {
    console.log(error.message);
    yield put(actions.updateLoggingIn(false));
  }
}

function* doSignUp({navigation, email, password, confirmPassword, city}) {
  try {
    if (password === confirmPassword) {
      const user = yield call(firebaseService.auth.createUserWithEmailAndPassword, email, password, city);
      yield call(firebaseService.database.update, "users/" + user.user.uid, city);
      navigation.push(ROUTES.HOME);
    }
    else {
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
  const city = yield select(selectors.city);
  console.log("city: ", city);

  let today = new Date();
  let formattedDate = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  console.log("date: ", formattedDate);

  const result = yield call(firebaseService.database.read, "booths/" + city + '/' + formattedDate);

  console.log("getRandomGif: ", result);
  let giftsQuantity = {
    onghutinox: 0,
    tuivai: 0,
    lysu: 0,
    binhthuytinh: 0,
  };

  if (result) {
    for (let key in result) {
      if (result.hasOwnProperty(key)) {
        giftsQuantity = result[key];
      }
    }
  }

  console.log("gift of date: ", giftsQuantity);
  let buildGiftsArray = [];
  for (let key in giftsQuantity) {
    for (let i = 0; i < giftsQuantity[key]; i++) {
      buildGiftsArray.push(key);
    }
  }
  shuffleArray(buildGiftsArray);
  console.log("shuffle buildGiftArray", buildGiftsArray);
  const randomIndex = Math.floor(Math.random() * (buildGiftsArray.length));
  console.log("getRandomGift Index", randomIndex);
  const selectedGift = buildGiftsArray[randomIndex];
  if (giftsQuantity[selectedGift] > 0) {
    giftsQuantity[selectedGift]--;
  }

  console.log("getRandomGift selectedGift", selectedGift);

  yield put(actions.updateSelectedGift(selectedGift));
  yield call(firebaseService.database.create, "booths/" + city + '/' + formattedDate, giftsQuantity);

}

function* updateGiftCount({selectedGift}) {
  const city = yield select(selectors.city);
  console.log("city: ", city);

  let today = new Date();
  let formattedDate = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  console.log("date: ", formattedDate);

  const result = yield call(firebaseService.database.read, "booths/" + city + '/' + formattedDate);

  console.log("getGift: ", result);
  let giftsQuantity = {
    onghutinox: 0,
    tuivai: 0,
    lysu: 0,
    binhthuytinh: 0,
  };

  if (result) {
    for (let key in result) {
      if (result.hasOwnProperty(key)) {
        giftsQuantity = result[key];
      }
    }
  }

  console.log("updateGiftCount ", selectedGift);

  let splitGift = selectedGift.split(',');
  console.log("updateGiftCount split", splitGift);
  if (splitGift.length > 1) {
    if (giftsQuantity[splitGift[0]] > 0) {
      giftsQuantity[splitGift[0]]--;
    }

    if (giftsQuantity[splitGift[1]] > 0) {
      giftsQuantity[splitGift[1]]--;
    }
  } else {
    if (giftsQuantity[selectedGift] > 0) {
      giftsQuantity[selectedGift]--;
    }
  }
  yield call(firebaseService.database.create, "booths/" + city + '/' + formattedDate, giftsQuantity);

}

function* updateGift({navigation, data}) {
  console.log(data);
  try {
    const booth =
      {
        onghutinox: data.onghutinox > 0 ? data.onghutinox : 0,
        tuivai: data.tuivai > 0 ? data.tuivai : 0,
        lysu: data.lysu > 0 ? data.lysu : 0,
        binhthuytinh: data.binhthuytinh > 0 ? data.binhthuytinh : 0,
      };
    const result = yield call(firebaseService.database.create, "booths/" + data.city + '/' + data.date, booth);
    window.alert("Successful update Gift");
  } catch (error) {
    console.log(error.message)
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
        for (let keySnap in gifts) {
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
    console.log(error.message)
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
    console.log(error.message)
  }
}

function generateOTP() {
  let digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

const sendRequest = async (path) => {
  const result = await fetch(path, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return await result.json();
};

function* doOtp({navigation, data}) {
  console.log("doOtp");
  try {
    console.log(data);
    let invalidField = [];
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        console.log(key + " -> " + data[key]);
        if (!data[key]) {
          invalidField.push(fieldMap[key]);
        }
      }
    }
    if (invalidField.length > 0) {
      window.alert("Vui lòng điền " + invalidField.join(', '));
    } else {

      yield put(actions.updatePhoneNumber(data.phoneNumber));
      yield put(actions.updateInputData(data));
      let otp = generateOTP();
      let otpMsg = `Ma OTP cua ban la ${otp}`;
      let city = yield select(selectors.city);
      yield call(firebaseService.database.update, "players/" + city + "/" + data.phoneNumber, data);
      const params = `Phone=${data.phoneNumber}&Content=${otpMsg}&ApiKey=${SMS_API_KEY}&SecretKey=${SMS_SECRET_KEY}&IsUnicode=false&Brandname=${SMS_BRANDNAME}&SmsType=2&Sandbox=${sandbox}`;
      const response = yield call(sendRequest, `https://restapi.esms.vn/MainService.svc/json/SendMultipleMessage_V4_get?${params}`);
      console.log(response);
      if (response.CodeResult == 100) {
        yield call(firebaseService.database.update, "otps/" + city + "/" + data.phoneNumber, otp);
        navigation.push(ROUTES.VERIFY_OTP)
      } else {
        window.alert(response.ErrorMessage)
      }
    }
    yield put(actions.updateDoingOtp(false));
  } catch (error) {
    console.log(error.message);
    yield put(actions.updateDoingOtp(false));
  }
}

function* resendOtp() {

  const isDoingOtp = yield select(selectors.isDoingOtp);
  if (isDoingOtp) return;

  yield put(actions.updateDoingOtp(true));

  const phoneNumber = yield select(selectors.phoneNumber);

  let otp = generateOTP();
  let otpMsg = `Ma OTP cua ban la ${otp}`;
  const params = `Phone=${phoneNumber}&Content=${otpMsg}&ApiKey=${SMS_API_KEY}&SecretKey=${SMS_SECRET_KEY}&IsUnicode=false&Brandname=${SMS_BRANDNAME}&SmsType=2&Sandbox=${sandbox}`;
  const response = yield call(sendRequest, `https://restapi.esms.vn/MainService.svc/json/SendMultipleMessage_V4_get?${params}`);
  console.log(response);
  if (response.CodeResult == 100) {
    let city = yield select(selectors.city);
    yield call(firebaseService.database.update, "otps/" + city + "/" + phoneNumber, otp);
  } else {
    console.log(response.ErrorMessage)
  }
  yield put(actions.updateDoingOtp(false));
}

function* doVerifyOtp({navigation, phoneNumber, otp}) {
  console.log("otp: ", otp);
  let city = yield select(selectors.city);

  try {
    const response = yield call(firebaseService.database.read, "otps/" + city + "/" + phoneNumber);
    if (otp == response) {
      navigation.push(ROUTES.GIFT_SELECT);
    } else {
      window.alert("Mã Xác Thực không chính xác");
    }
  } catch (error) {
    console.log(error.message)
  }
}

function* checkSmsAccountBalance({navigation}) {
  try {
    console.log("Check SMS account Balance");

    const response = yield call(sendRequest, `https://restapi.esms.vn/MainService.svc/json/GetBalance/${SMS_API_KEY}/${SMS_SECRET_KEY}`);
    console.log(response);
    if (response.CodeResponse === "100") {
      console.log("Account Balance: ", response.Balance);
      yield put(actions.updateSmsBalance(response.Balance))
    }
    //navigation.push(ROUTES.HOME);
  } catch (error) {
    console.log(error.message)
  }
}

function* getAllPlayers() {
  try {
    let city = yield select(selectors.city);
    const result = yield call(firebaseService.database.read, "players/" + city);
    let players = [];

    // console.log("date gifts: ", players);
    yield call(getAllGiftResults);
    let otps = yield call(firebaseService.database.read, "otps/" + city);

    let giftResults = yield select(selectors.giftResults);
    // console.log("giftResults: ", players);

    if (giftResults.length > 0) {
      giftResults.forEach(function (gift) {
        let player = {...gift, ...result[gift.phoneNumber], otp: otps[gift.phoneNumber]};
        let date = player.date;
        let nameArr = date.split(', ');

        // let date = new Date(player.date);
        // let dateString = moment(date).format("DD/MM/YYYY, HH:mm:ss");
        // if (dateString == "Invalid date") {
        //   dateString = player.date;
        // }
        // let nameArr = dateString.split(', ');
        // let momnetVal = moment(player.date, "HH:mm:ss, DD/MM/YYYY");
        // player.dateOnly = momnetVal.format("DD/MM/YYYY");
        // player.timeOnly = momnetVal.format("HH:mm:ss");
        // let pattern = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

        if (nameArr.length > 1) {
          if (nameArr[0].includes(":")) {
            player.dateOnly = nameArr[1];
            player.timeOnly = nameArr[0];
          } else {
            player.dateOnly = nameArr[0];
            player.timeOnly = nameArr[1];
          }

          if (player.timeOnly && player.timeOnly.includes('M')) {
            let momentVar = moment(player.dateOnly, "MM/DD/YYYY");
            let momentTime = moment(player.timeOnly, "HH:mm:ss A");
            player.dateOnly = momentVar.format("DD/MM/YYYY");
            player.timeOnly = momentTime.format("HH:mm:ss");
          }

          if (player.dateOnly != "Invalid date") {
            let momentVar = moment(player.dateOnly, "DD/MM/YYYY");
            player.dateOnly = momentVar.format("DD/MM/YYYY");
          }

        } else {
          let date = player.date;
          if (date.includes("-")) {
            let format = moment(date, "YYYY-MM-DD HH:mm:ss");
            player.dateOnly = format.format("DD/MM/YYYY");
            player.timeOnly = format.format("HH:mm:ss");
          } else {
            let format = moment(date, "MM/DD/YYYY HH:mm:ss A");
            player.dateOnly = format.format("DD/MM/YYYY");
            player.timeOnly = format.format("HH:mm:ss");
          }
        }



        // player.dateOnly = player.date;
        // player.timeOnly = nameArr[1];
        player.giftTypeLabel = giftType[player.giftType];
        player[CONST.ONG_HUT_INOX] = player.gift ? (player.gift.includes(CONST.ONG_HUT_INOX) ? 1 : '') : '';
        player[CONST.BINH_THUY_TINH] = player.gift ? (player.gift.includes(CONST.BINH_THUY_TINH) ? 1 : '') : '';
        player[CONST.LY_SU] = player.gift ? (player.gift.includes(CONST.LY_SU) ? 1 : '') : '';
        player[CONST.TUI_VAI] = player.gift ? (player.gift.includes(CONST.TUI_VAI) ? 1 : '') : '';
        player.phoneNumber = `'${player.phoneNumber}`;

        players.push(player);
      })
    }

    // console.log("players: ", players);


    yield put(actions.updatePlayers(players));
  } catch (error) {
    console.log(error.message)
  }
}

function* saveQuizResult({question, answerIndex}) {
  console.log("saveQuiz", question);
  console.log("saveQuiz index", answerIndex);
  let city = yield select(selectors.city);


  let data = {label: question.label, answers: question.answers, result: answerIndex}
  yield call(firebaseService.database.create, "quiz/" + city, data);
}

function* getAllQuizResults() {
  try {
    let city = yield select(selectors.city);
    const result = yield call(firebaseService.database.read, "quiz/" + city);

    console.log("Get QuizResults", result);
    let quizes = [];
    for (let key in result) {
      if (result.hasOwnProperty(key)) {
        console.log(key + " -> " + result[key]);

        quizes.push({
          label: result[key].label,
          answer1: result[key].answers['0'],
          answer2: result[key].answers['1'],
          answer3: result[key].answers['2'],
          result: result[key].result
        })
      }
    }
    console.log("date quizes: ", quizes);
    yield put(actions.updateQuizResults(quizes));
  } catch (error) {
    console.log(error.message)
  }
}
function* saveGiftResult({giftType}) {
  console.log("saveGiftResut");
  const phoneNumber = yield select(selectors.phoneNumber);
  const selectedGift = yield select(selectors.selectedGift);
  let city = yield select(selectors.city);

  if (!phoneNumber || !selectedGift) return;

  console.log("selectedGid", selectedGift);
  yield call(firebaseService.database.create, "gifts/" + city + "/" + phoneNumber,
    {
      gift: selectedGift,
      giftType: giftType,
      date: moment().format("HH:mm:ss, DD/MM/YYYY")
    });
}

function* getAllGiftResults() {
  try {
    let city = yield select(selectors.city);
    const result = yield call(firebaseService.database.read, "gifts/" + city);

    // console.log("Get GiftsResults", result);
    let giftResults = [];
    for (let key in result) {
      if (result.hasOwnProperty(key)) {
        // console.log(key + " -> " + result[key]);
        let phoneNumberGift = '';
        let gifts = result[key];
        for (let keySnap in gifts) {
          if (gifts.hasOwnProperty(keySnap)) {
            // console.log(keySnap + " -> " + gifts[keySnap]);
            phoneNumberGift = gifts[keySnap];
          }
        }
        phoneNumberGift["phoneNumber"] = key;
        giftResults.push(phoneNumberGift)
      }
    }
    // console.log("phonenumber gifts: ", giftResults);
    yield put(actions.updateGiftResults(giftResults));
  } catch (error) {
    console.log(error.message)
  }
}

function* checkIsPhoneNumberExist({phoneNumber, data, history}) {
  const isDoingOtp = yield select(selectors.isDoingOtp);
  if (isDoingOtp) return;

  yield put(actions.updateDoingOtp(true));
  try {
    let city = yield select(selectors.city);
    const result = yield call(firebaseService.database.read, 'gifts/' + city + '/' + phoneNumber);

    console.log("checkIsPhoneNumberExist: ", result);

    if (!result || Object.keys(result).length < numberGiftForOnePhoneNumber) {
      console.log("checkIsPhoneNumberExist history", history);
      yield put(actions.updateIsPhoneNumberExist(false));
      yield call(doOtp, {navigation: history, data: data});
    } else {
      yield put(actions.updateIsPhoneNumberExist(true));
      yield put(actions.updateDoingOtp(false));
    }

    // else{
    //   setErrorMessage("Số Điện Thoại Đã Tồn Tại");
    //   setOpen(true);
    // }

    // if(result) {
    //   yield put(actions.updateIsPhoneNumberExist(true));
    // } else{
    //   yield put(actions.updateIsPhoneNumberExist(false));
    // }
  } catch (error) {
    console.log(error.message)
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
  yield takeEvery(Types.GET_ALL_PLAYERS, getAllPlayers);
  yield takeEvery(Types.RESEND_OTP, resendOtp);
  yield takeEvery(Types.SAVE_QUIZ_RESULT, saveQuizResult);
  yield takeEvery(Types.SAVE_GIFT_RESULT, saveGiftResult);
  yield takeEvery(Types.GET_ALL_QUIZ_RESULTS, getAllQuizResults);
  yield takeEvery(Types.GET_ALL_GIFT_RESULTS, getAllGiftResults);
  yield takeEvery(Types.CHECK_IS_PHONE_NUMBER_EXIST, checkIsPhoneNumberExist);
  yield takeEvery(Types.UPDATE_GIFT_COUNT, updateGiftCount);
}

export {rootSaga};
