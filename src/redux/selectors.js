import {createSelector, createStructuredSelector} from "reselect";

const localState = state => state.reducer;

const count = createSelector(localState, state => state.count);
const selectedGift = createSelector(localState, state => state.selectedGift);
const boothsData = createSelector(localState, state => state.boothsData);
const city = createSelector(localState, state => state.city);
const smsBalance = createSelector(localState, state => state.smsBalance);
const phoneNumber = createSelector(localState, state => state.phoneNumber);
const otpList = createSelector(localState, state => state.otpList);
const isLoggedIn = createSelector(localState, state => state.isLoggedIn);
const selectedTrash = createSelector(localState, state => state.selectedTrash);
const answerResult = createSelector(localState, state => state.answerResult);
const players = createSelector(localState, state => state.players);
const inputData = createSelector(localState, state => state.inputData);
const quizResults = createSelector(localState, state => state.quizResults);
const giftResults = createSelector(localState, state => state.giftResults);
const isPhoneNumberExist = createSelector(localState, state => state.isPhoneNumberExist);
const correctAnswerText = createSelector(localState, state => state.correctAnswerText);
const isDoingOtp = createSelector(localState, state => state.isDoingOtp);
const isLogging = createSelector(localState, state => state.isLogging);


const root = createStructuredSelector({
  count,
  selectedGift,
  boothsData,
  city,
  smsBalance,
  phoneNumber,
  otpList,
  isLoggedIn,
  selectedTrash,
  answerResult,
  players,
  inputData,
  quizResults,
  giftResults,
  isPhoneNumberExist,
  correctAnswerText,
  isDoingOtp,
  isLogging
});

export {root, city, phoneNumber, inputData, selectedGift, isPhoneNumberExist, giftResults,
  isDoingOtp,
  isLogging};
