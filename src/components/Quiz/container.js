import {connect} from "react-redux";
import {compose} from "redux";

import {selectors, actions} from "../../redux";
import {lifecycle} from "recompose";
import Quiz from "./component"
import * as ROUTES from "../../constants/routes";
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

      const btnStateInit = [false, false, false, false, false];
      const initState = {
        render: false,
        btnState: btnStateInit,
        toogleState: (index) => {
          btnStateInit[index] = true;
          this.setState({...this.props.state, btnState: btnStateInit, toogleState: (index) => {} });

          console.log("selectedTrashType", Const.TrashType[index]);
          updateSelectedTrashType(Const.TrashType[index]);

          setTimeout(function () {
            history.push(ROUTES.SUB_QUIZ)
          }.bind(this), 2000);
        },

        updateRender: ((render) => {
          this.setState({...this.props.state, render:render});
        })
      };

      this.setState(initState);
    },
    componentWillMount() {
      const {history, isLoggedIn} = this.props;
      if (!isLoggedIn) {
        history.push(ROUTES.LOG_IN)
      }
    },
    componentWillUnmount() {
      this.setState = (state,callback)=>{
        return;
      };
    }
  })
)(Quiz);

export default QuizContainer;