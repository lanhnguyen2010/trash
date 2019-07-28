import {connect} from "react-redux";
import {compose} from "redux";

import {selectors, actions} from "../../redux";
import {lifecycle} from "recompose";
import Quiz from "./component"
import * as Const from "../../constants/Const"
import * as Routes from "../../constants/routes"


const QuizContainer = compose(
  connect(
    selectors.root,
    {
      updateSelectedTrashType : actions.updateSelectedTrashType
    },
  ),
  lifecycle({
    componentDidMount() {
      const { history, updateSelectedTrashType } = this.props;

      const btnStateInit = [false, false, false, false];
      const initState = {
        render: false,
        btnState: btnStateInit,
        toogleState: (index) => {
          btnStateInit[index] = true;
          this.setState({...this.props.state, btnState: btnStateInit, toogleState: (index) => {} });

          console.log("selectedTrashType", Const.TrashType[index]);
          updateSelectedTrashType(Const.TrashType[index]);
          history.push(Routes.SUB_QUIZ)
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