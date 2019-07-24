import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import rootReducer from "./redux";

const preloadedState = {};
const sagaMiddleware = createSagaMiddleware();
const composeFunc = compose;

const store = createStore(
  rootReducer,
  preloadedState,
  composeFunc(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

export default store;
