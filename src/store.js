import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import reducer from "./redux/reducer";
import {loadState, saveState} from "./localStoragePersist";
import _ from "lodash";
import {select} from "redux-saga/effects"


const preloadedState = {};
const sagaMiddleware = createSagaMiddleware();
const composeFunc = compose;

const rootReducer = combineReducers({
  reducer
});

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeFunc(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

store.subscribe(() => {
  saveState(store.getState());
});


export default store;
