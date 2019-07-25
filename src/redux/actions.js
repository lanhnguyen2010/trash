import { createActions } from "reduxsauce";

const { Types, Creators: actions } = createActions(
  {
    loadData: null,
    updateData: ["count"],
    doLogin: ["email", "password"],
  },
  {
    prefix: "ACTIONS/"
  }
);

export { Types, actions };