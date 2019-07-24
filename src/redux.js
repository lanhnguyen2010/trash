import { combineReducers } from "redux";

import { reducer as DaNang } from "./components/DaNang/redux";
import { reducer as Login } from "./components/Login/redux";

const rootReducer = combineReducers({
  DaNang,
  Login
});

export default rootReducer;