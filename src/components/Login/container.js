import {connect} from "react-redux";
import {compose} from "redux";

import Login from "./component";
import {selectors, actions} from "./redux";
import {lifecycle} from "recompose";

const LoginContainer = compose(
  connect(
    selectors.root,
    {
      doLogin: actions.doLogin
    }
  ),
  lifecycle({

  })
)(Login);

export default LoginContainer;