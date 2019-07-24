import { fork } from "redux-saga/effects";

import { sagas as DaNang } from "./components/DaNang/redux";
import { sagas as Login } from "./components/Login/redux";
import { sagas as SignUp } from "./components/SignUp/redux";

export default function* rootSaga() {
  yield fork(DaNang.rootSaga);
  yield fork(Login.rootSaga);
  yield fork(SignUp.rootSaga);
}