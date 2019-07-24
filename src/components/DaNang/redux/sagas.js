import { put, takeEvery } from "redux-saga/effects";

import { actions, Types } from "./actions";

function* loadData() {
  console.log("loadData");
  yield put(actions.updateData(3));
}

function* rootSaga() {
  yield takeEvery(Types.LOAD_DATA, loadData);
}

export { rootSaga };
