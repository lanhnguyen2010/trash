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
    const data = yield call(firebaseService.auth.signInWithEmailAndPassword, email, password);
    // //yield put(loginWithEmailSuccess(data));
    // console.log(data);
    navigation.push(ROUTES.HOME);
  } catch (error) {
    window.alert(error.message)

    //yield put(loginWithEmailFailure(error));
  }
}

function* updateGift({navigation, data}) {
  console.log(data)
  try {
    const booth =
      {
        onghutinox: data.onghutinox != null ? data.onghutinox : 0,
        tuivai: data.tuivai != null ? data.tuivai : 0,
        daonia: data.daonia != null ? data.daonia : 0,
        onghutgao: data.onghutgao != null ? data.onghutgao : 0,
        binhthuytinh: data.binhthuytinh != null ? data.binhthuytinh : 0,
      };
    const result = yield call(firebaseService.database.create, "booths/ " + data.city + '/' + data.date, booth);
    console.log("Successful update Gift: ", result);
  } catch (error) {
    window.alert(error.message)
  }
}

function* rootSaga() {
  yield takeEvery(Types.DO_LOGIN, doLogin);
  yield takeEvery(Types.LOAD_DATA, loadData);
  yield takeEvery(Types.UPDATE_GIFT, updateGift);

}

export { rootSaga };
