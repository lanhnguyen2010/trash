import {createSelector, createStructuredSelector} from "reselect";

const localState = state => state.reducer;

const count = createSelector(localState, state => state.count);
const selectedGift = createSelector(localState, state => state.selectedGift);
const boothsData = createSelector(localState, state => state.boothsData);
const city = createSelector(localState, state => state.city);
const smsBalance = createSelector(localState, state => state.smsBalance);
const phoneNumber = createSelector(localState, state => state.phoneNumber);


const root = createStructuredSelector({
  count,
  selectedGift,
  boothsData,
  city,
  smsBalance,
  phoneNumber
});

export {root};
