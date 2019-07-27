import _ from "lodash";
import {createReducer} from "reduxsauce";
import {Types} from "./actions";

const initialState = {
  count: 0,
  boothsData:'',
  city:'',
  selectedGift: "",
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
  [Types.UPDATE_CITY]: (state, {city}) =>
  _.assign({}, state, {
    city: city
  })
});


export default reducer;
