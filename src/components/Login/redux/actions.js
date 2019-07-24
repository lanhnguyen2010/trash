import { createActions } from "reduxsauce";

const { Types, Creators: actions } = createActions(
  {
    doLogin: ["username", "password"],
  },
  {
    prefix: "LOG_IN/"
  }
);

export { Types, actions };