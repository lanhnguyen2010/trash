import { call, put, takeEvery } from "redux-saga/effects";

import { actions, Types } from "./actions";
import firebaseService from "../components/Firebase";
import {push} from "react-router-redux";
import * as ROUTES from "../constants/routes";

function* loadData() {
  console.log("loadData");
  yield put(actions.updateData(3));
}

function* doLogin({email, password}) {
  try {
    const data = yield call(firebaseService.auth.signInWithEmailAndPassword, email, password);
    //yield put(loginWithEmailSuccess(data));
    console.log(data);
    yield put(push(ROUTES.HOME));
  } catch (error) {
    console.log(error)

    //yield put(loginWithEmailFailure(error));
  }
}

function* rootSaga() {
  yield takeEvery(Types.DO_LOGIN, doLogin);
  yield takeEvery(Types.LOAD_DATA, loadData);
}

export { rootSaga };
