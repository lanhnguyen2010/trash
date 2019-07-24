import { combineReducers } from "redux";

import { reducer as DaNang } from "./components/DaNang/redux";
import { reducer as Login } from "./components/Login/redux";
import { reducer as SignUp } from "./components/SignUp/redux";

const rootReducer = combineReducers({
  DaNang,
  Login,
  SignUp
});

export default rootReducer;