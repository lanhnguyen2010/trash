import {createSelector, createStructuredSelector} from "reselect";

const localState = state => state.reducer;

const count = createSelector(localState, state => state.count);
const boothsData = createSelector(localState, state => state.boothsData);
const city = createSelector(localState, state => state.city);

const root = createStructuredSelector({
  count,
  boothsData,
  city
});

export {root};
