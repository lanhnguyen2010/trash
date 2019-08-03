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
      updateAnswerResult: actions.updateAnswerResult,
      saveQuizResult: actions.saveQuizResult,
      updateCorrectAnswerText: actions.updateCorrectAnswerText
    },
  ),
  lifecycle({
    componentWillMount() {
      const {history, selectedTrash, updateAnswerResult,saveQuizResult, updateCorrectAnswerText} = this.props;

      const question = Const.Questions[selectedTrash];

      const btnStateInit = ["normal", "normal", "normal"];


      const showResult = (index) => {
        const result = buildQuestion.answers[index] == correctAnswer ? "correct" : "wrong";
        btnStateInit[index] = result;
        if (result == "wrong") {
          // for (let i = 0; i < buildQuestion.answers.length; i++) {
          //   if (buildQuestion.answers[i] == correctAnswer) {
          //     btnStateInit[i] = "correct";
          //   }
          // }
          updateCorrectAnswerText(correctAnswer);
        } else {

          for (let i = 0; i < buildQuestion.answers.length; i++) {
            if (index != i) {
              btnStateInit[i] = "hidden";
            }
          }
        }

        this.setState({
          ...this.props.state, btnState: btnStateInit
        });

        showResultScreen(result);
      };

      const showResultScreen = (result) => {
        setTimeout(function () {
          console.log("onSelected", result);
          updateAnswerResult(result)
        }.bind(this), 2000)
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
        btnStateInit[index] = "correct";

        setTimeout(function () {
          showResult(index);
        }.bind(this), 2000);

        saveQuizResult(buildQuestion, index);

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