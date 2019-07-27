import {connect} from "react-redux";
import {compose} from "redux";

import {selectors, actions} from "../../redux";
import {lifecycle} from "recompose";
import Quiz from "./component"

const QuizContainer = compose(
  connect(
    selectors.root,
    {
      doLogin: actions.doLogin,
    },
  ),
  lifecycle({
    componentDidMount() {
      setTimeout(function() { //Start the timer
        this.setState({render: true}) ;
      }.bind(this), 3000)
    }
  })
)(Quiz);

export default QuizContainer;