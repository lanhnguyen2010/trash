import { call, put, takeEvery } from "redux-saga/effects";

import { actions, Types } from "./actions";
import firebaseService from "../components/Firebase";
import * as ROUTES from "../constants/routes";

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

function* rootSaga() {
  yield takeEvery(Types.DO_LOGIN, doLogin);
  yield takeEvery(Types.LOAD_DATA, loadData);
  yield takeLatest(Types.GET_RANDOM_GIFT, getRandomGift);
  yield takeEvery(Types.UPDATE_GIFT, updateGift);
  yield takeEvery(Types.GET_GIFTS, getGifts);
  yield takeEvery(Types.DO_SIGN_UP, doSignUp);

}

export { rootSaga };
