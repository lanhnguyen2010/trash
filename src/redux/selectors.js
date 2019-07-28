import {createSelector, createStructuredSelector} from "reselect";

const localState = state => state.reducer;

const count = createSelector(localState, state => state.count);
const selectedGift = createSelector(localState, state => state.selectedGift);
const boothsData = createSelector(localState, state => state.boothsData);


const root = createStructuredSelector({
  count,
  selectedGift,
  boothsData
});

export {root};
