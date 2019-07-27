import { createActions } from "reduxsauce";

const { Types, Creators: actions } = createActions(
  {
    loadData: null,
    updateData: ["count"],
    doLogin: ["navigation", "email", "password"],
    doSignUp: ["navigation", "email", "password", "confirmPassword", "city"],
    updateGift: ["navigation", "data"],
    getGifts: ["city"],
    updateBoothsData:["boothsData"],
    updateCity:["city"]
  },
  {
    prefix: "ACTIONS/"
  }
);

export { Types, actions };