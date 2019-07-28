import {connect} from "react-redux";
import {compose} from "redux";

import {selectors, actions} from "../../redux";
import {lifecycle} from "recompose";
import Quiz from "./component"
import * as ROUTES from "../../constants/routes";


const QuizContainer = compose(
  connect(
    selectors.root,
    {

    },
  ),
  lifecycle({
    componentDidMount() {
      const btnStateInit = [false, false, false, false];
      const initState = {
        render: false,
        btnState: btnStateInit,
        toogleState: (index) => {
          btnStateInit[index] = true;
          this.setState({...this.props.state, btnState: btnStateInit, toogleState: (index) => {} });
          console.log(this);
        }
      };

      this.setState(initState);

      setTimeout(function() {
        this.setState({...initState, render:true}) ;
      }.bind(this), 1000)
    },
    componentWillMount() {
      const {history, isLoggedIn} = this.props;
      if (!isLoggedIn) {
        history.push(ROUTES.LOG_IN)
      }
    },
  })
)(Quiz);

export default QuizContainer;