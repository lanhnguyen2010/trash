import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {lifecycle} from 'recompose';
import { Provider } from "react-redux";
import _ from "lodash";

import store from "./store";
import * as ROUTES from './constants/routes';
import Home from './components/Home';
import Login from './components/Login/container';
import DaNang from './components/DaNang/container';
import SignUp from './components/SignUp';

const AppStateLess = () => (
  <Provider store={store}>
    <Router>
      <Route path={ROUTES.HOME} component={Home}/>
      <Route path={ROUTES.LOG_IN} component={Login}/>
      <Route path={ROUTES.DA_NANG} component={DaNang}/>
      <Route path={ROUTES.SIGN_UP} component={SignUp}/>
    </Router>
  </Provider>
);

const App = lifecycle({
  componentDidMount() {

  }
})(AppStateLess);

export default App;