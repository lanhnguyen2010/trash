import {call, put, takeEvery, takeLatest} from "redux-saga/effects";

import {actions, Types} from "./actions";
import firebaseService from "../components/Firebase";
import * as ROUTES from "../constants/routes";


function* loadData() {
  console.log("loadData");
  yield put(actions.updateData(3));
}

function* doLogin({navigation, email, password}) {
  try {
    const data = yield call(firebaseService.auth.signInWithEmailAndPassword, email, password);
    // //yield put(loginWithEmailSuccess(data));
    // console.log(data);
    navigation.push(ROUTES.HOME);
  } catch (error) {
    console.log(error)

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

function* rootSaga() {
  yield takeEvery(Types.DO_LOGIN, doLogin);
  yield takeEvery(Types.LOAD_DATA, loadData);
  yield takeLatest(Types.GET_RANDOM_GIFT, getRandomGift);
}

export {rootSaga};
