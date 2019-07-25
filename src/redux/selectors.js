import {createSelector, createStructuredSelector} from "reselect";

const localState = state => state.reducer;

const count = createSelector(localState, state => state.count);

const root = createStructuredSelector({
  count
});

export {root};
