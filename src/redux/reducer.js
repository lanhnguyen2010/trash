import _ from "lodash";
import {createReducer} from "reduxsauce";
import {Types} from "./actions";

const initialState = {
  count: 0
};

const reducer = createReducer(initialState, {
  [Types.UPDATE_DATA]: (state, {count}) => {
    console.log("reducer", count);
    return _.assign({}, state, {
      count: count
    })
  }
});


export default reducer;
