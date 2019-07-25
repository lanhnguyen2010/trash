import { createActions } from "reduxsauce";

const { Types, Creators: actions } = createActions(
  {
    loadData: null,
    updateData: ["count"],
    doLogin: ["navigation", "email", "password"],
  },
  {
    prefix: "ACTIONS/"
  }
);

export { Types, actions };