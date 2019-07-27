import _ from "lodash";
import {createReducer} from "reduxsauce";
import {Types} from "./actions";

const initialState = {
  count: 0,
  selectedGift: ""
};

const reducer = createReducer(initialState, {
  [Types.UPDATE_DATA]: (state, {count}) =>
    _.assign({}, state, {
      count: count
    }),
  [Types.UPDATE_SELECTED_GIFT]: (state, {selectedGift}) =>
    _.assign({}, state, {
      selectedGift: selectedGift
    })
});


export default reducer;
