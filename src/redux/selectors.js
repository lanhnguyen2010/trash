import {createSelector, createStructuredSelector} from "reselect";

const localState = state => state.reducer;

const count = createSelector(localState, state => state.count);
const selectedGift = createSelector(localState, state => state.selectedGift);

const root = createStructuredSelector({
  count,
  selectedGift
});

export {root};
