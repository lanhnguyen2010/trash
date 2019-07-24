import { put, takeEvery, call } from "redux-saga/effects";

import { actions, Types } from "./actions";
import * as ROUTES from '../../../constants/routes';
import firebaseService from '../../Firebase'
import {push} from 'react-router-redux'


const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

function* doLogin({email, password}) {
  try {
    const data = yield call(firebaseService.auth.signInWithEmailAndPassword, email, password);
    //yield put(loginWithEmailSuccess(data));
    console.log(data)
    yield put(push(ROUTES.HOME));
  } catch (error) {
    console.log(error)

    //yield put(loginWithEmailFailure(error));
  }

}

function* rootSaga() {
  yield takeEvery(Types.DO_LOGIN, doLogin);
}

export { rootSaga };
