import {connect} from "react-redux";
import {compose} from "redux";

import {selectors, actions} from "../../redux";
import {lifecycle} from "recompose";
import SubQuiz from "./component"
import * as Const from "../../constants/Const"
import * as utils from "../../constants/utils"


const SubQuizContainer = compose(
  connect(
    selectors.root,
    {
      updateAnswerResult: actions.updateAnswerResult
    },
  ),
  lifecycle({
    componentWillMount() {
      const {history, selectedTrash, updateAnswerResult} = this.props;

      const question = Const.Questions[selectedTrash];

      const btnStateInit = ["normal", "normal", "normal"];


      const showResultScreen = (result) => {
        setTimeout(function () {
          console.log("onSelected", result);
          updateAnswerResult(result)
        }.bind(this), 1000)
      };

      const correctAnswer = question.correctAnswers[utils.randomIndex(question.correctAnswers.length)];
      let answers = [
        correctAnswer,
        question.wrongAnswers1[utils.randomIndex(question.wrongAnswers1.length)],
        question.wrongAnswers2[utils.randomIndex(question.wrongAnswers2.length)],
      ];
      utils.shuffleArray(answers);
      const buildQuestion = {
        label: question.label,
        answers: answers
      };

      const toogleState = (index) => {
        const result = buildQuestion.answers[index] == correctAnswer ? "correct" : "wrong";
        btnStateInit[index] = result;
        showResultScreen(result);
        this.setState({
          ...this.props.state, btnState: btnStateInit, toogleState: (index) => {
          }
        });
      };

      const initState = {
        btnState: btnStateInit,
        toogleState: toogleState,
        question: buildQuestion

      };

      this.setState(initState);
    }
  })
)(SubQuiz);

export default SubQuizContainer;