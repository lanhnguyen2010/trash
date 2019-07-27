import {createSelector, createStructuredSelector} from "reselect";

const localState = state => state.reducer;

const count = createSelector(localState, state => state.count);
const boothsData = createSelector(localState, state => state.boothsData);


const root = createStructuredSelector({
  count,
  boothsData
});

export {root};
