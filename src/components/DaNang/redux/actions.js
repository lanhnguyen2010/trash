import { createActions } from "reduxsauce";

const { Types, Creators: actions } = createActions(
  {
    loadData: null,
    updateData: ["count"],
  },
  {
    prefix: "DA_NANG/"
  }
);

export { Types, actions };