import _ from "lodash";
import {createReducer} from "reduxsauce";
import {Types} from "./actions";

const initialState = {
  count: 0,
  boothsData: '',
  city: '',
  phoneNumber: '',
  smsBalance: 0,
  selectedGift: "",
  otpList: '',
  isLoggedIn: false
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
  [Types.UPDATE_CITY]: (state, {city}) => {
    console.log("city update:, ", city);
    return _.assign({}, state, {
      city: city
    })
  },
  [Types.UPDATE_PHONE_NUMBER]: (state, {phoneNumber}) =>
    _.assign({}, state, {
      phoneNumber: phoneNumber
    }),
  [Types.UPDATE_SMS_BALANCE]: (state, {smsBalance}) => {
    return _.assign({}, state, {
      smsBalance: smsBalance
    })
  },
  [Types.UPDATE_OTP_LIST]: (state, {otpList}) => {
    return _.assign({}, state, {
      otpList: otpList
    })
  },
  [Types.UPDATE_IS_LOGGED_IN]: (state, {isLoggedIn}) => {
    return _.assign({}, state, {
      isLoggedIn: isLoggedIn
    })
  }
});


export default reducer;
