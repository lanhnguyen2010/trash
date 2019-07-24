import { createActions } from "reduxsauce";

const { Types, Creators: actions } = createActions(
  {
    registerWithEmail: ["email", "password"],
    registerWithEmailSuccess:["data"],
    registerWithEmailFailure:["error"]
  },
  {
    prefix: "SIGN_UP/"
  }
);

export { Types, actions };
