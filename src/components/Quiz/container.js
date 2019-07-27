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
    }
  })
)(Quiz);

export default QuizContainer;