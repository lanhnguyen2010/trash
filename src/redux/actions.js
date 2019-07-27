import { createActions } from "reduxsauce";

const { Types, Creators: actions } = createActions(
  {
    loadData: null,
    updateData: ["count"],
    doLogin: ["navigation", "email", "password"],
    updateGift: ["navigation", "data"],
    getGifts: ["city"],
    updateBoothsData:["boothsData"]
  },
  {
    prefix: "ACTIONS/"
  }
);

export { Types, actions };