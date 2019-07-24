import { createActions } from "reduxsauce";

const { Types, Creators: actions } = createActions(
  {
    doLogin: ["email", "password"],
  },
  {
    prefix: "LOG_IN/"
  }
);

export { Types, actions };