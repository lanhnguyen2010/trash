import { fork } from "redux-saga/effects";

import { sagas } from "./redux";

export default function* rootSaga() {
  yield fork(sagas.rootSaga);
}