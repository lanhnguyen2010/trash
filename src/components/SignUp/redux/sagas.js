import { put, takeEvery, call} from "redux-saga/effects";

import { actions, Types } from "./actions";
import firebaseService from '../../Firebase';
import { push } from 'react-router-redux';

import * as ROUTES from '../../../constants/routes';


const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

function *registerWithEmail ({email, password}) {
  try {
    console.log("firebase auth", email, password);
    console.log(firebaseService.auth);
    const data = yield call(firebaseService.auth.createUserWithEmailAndPassword, email, password);
    // yield put(registerWithEmailSuccess(data));
    console.log(data);

    yield put(push(ROUTES.LOG_IN));
  } catch (error) {
    window.alert(error.message);
  }
}

function* rootSaga() {
  yield takeEvery(Types.REGISTER_WITH_EMAIL, registerWithEmail);
}

export { rootSaga };
