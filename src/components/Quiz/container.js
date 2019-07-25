import {connect} from "react-redux";
import {compose} from "redux";

import {selectors, actions} from "../../redux";
import {lifecycle} from "recompose";

const QuizContainer = compose(
  connect(
    selectors.root,
    {
      doLogin: actions.doLogin
    }
  ),
  lifecycle({

  })
)(Quiz);

export default QuizContainer;