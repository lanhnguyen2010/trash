import { createSelector, createStructuredSelector } from "reselect";

const localState = state => state.DaNang;
const count = createSelector(localState, state => state.count);

const root = createStructuredSelector({
  count
});

export { root, count };
