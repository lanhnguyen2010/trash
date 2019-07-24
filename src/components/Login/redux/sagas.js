import { put, takeEvery } from "redux-saga/effects";

import { actions, Types } from "./actions";

function* doLogin({username, password}) {
  console.log("username", username);
  console.log("password", password);
}

function* rootSaga() {
  yield takeEvery(Types.DO_LOGIN, doLogin);
}

export { rootSaga };
