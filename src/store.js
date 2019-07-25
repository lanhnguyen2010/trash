import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import reducer from "./redux/reducer";
import {routerReducer} from "react-router-redux";

const preloadedState = {};
const sagaMiddleware = createSagaMiddleware();
const composeFunc = compose;

const rootReducer = combineReducers({
  reducer,
  routing: routerReducer
});

const store = createStore(
  rootReducer,
  preloadedState,
  composeFunc(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

export default store;
