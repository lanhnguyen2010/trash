import _ from "lodash";
import {createReducer} from "reduxsauce";
import {Types} from "./actions";

const initialState = {
  count: 0,
  selectedGift: "",
  boothsData:'',
  selectedTrash: "",
  answerResult: "",
};

const reducer = createReducer(initialState, {
  [Types.UPDATE_DATA]: (state, {count}) =>
    _.assign({}, state, {
      count: count
    }),
  [Types.UPDATE_SELECTED_GIFT]: (state, {selectedGift}) =>
    _.assign({}, state, {
      selectedGift: selectedGift
    }),
  [Types.UPDATE_BOOTHS_DATA]: (state, {boothsData}) =>
    _.assign({}, state, {
      boothsData: boothsData
    }),

  [Types.UPDATE_SELECTED_TRASH_TYPE]: (state, {selectedTrash}) =>
    _.assign({}, state, {
      selectedTrash: selectedTrash
    }),

  [Types.UPDATE_ANSWER_RESULT]: (state, {answerResult}) =>
    _.assign({}, state, {
      answerResult: answerResult
    }),

  [Types.END_FLOW]:  (state) =>
    _.assign({}, state, {
      count: 0,
      selectedGift: "",
      boothsData:'',
      selectedTrash: "",
      answerResult: "",
    }),


  //QUIZ
  updateSelectedTrashType:["selectedTrash"],
  updateSelectedAnswer:["seletedAnswer"],
  updateAnswerResult: ["result"]
});


export default reducer;
