import _ from "lodash";
import {createReducer} from "reduxsauce";
import {Types} from "./actions";

const initialState = {
  count: 0
};

const reducer = createReducer(initialState, {
  [Types.UPDATE_DATA]: (state, {count}) =>
    _.assign({}, state, {
      count: count
    })
});

export default reducer;
