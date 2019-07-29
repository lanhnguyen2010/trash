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
  isLoggedIn: false,
  selectedTrash: "",
  answerResult: "",
  players:''
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
  },
  [Types.UPDATE_SELECTED_TRASH_TYPE]: (state, {selectedTrash}) =>
  _.assign({}, state, {
    selectedTrash: selectedTrash
  }),

  [Types.UPDATE_ANSWER_RESULT]: (state, {answerResult}) =>
  _.assign({}, state, {
    answerResult: answerResult
  }),
  [Types.UPDATE_PLAYERS]: (state, {players}) =>
    _.assign({}, state, {
      players: players
    }),

  [Types.END_FLOW]:  (state) =>
  _.assign({}, state, {
    count: 0,
    boothsData: '',
    phoneNumber: '',
    smsBalance: 0,
    selectedGift: "",
    otpList: '',
    selectedTrash: "",
    answerResult: "",
  })
});


export default reducer;
