import { createActions } from "reduxsauce";

const { Types, Creators: actions } = createActions(
  {
    loadData: null,
    updateData: ["count"],
    doLogin: ["navigation", "email", "password"],
    getRandomGift: null,
    updateSelectedGift: ["selectedGift"],
    doSignUp: ["navigation", "email", "password", "confirmPassword", "city"],
    updateGift: ["navigation", "data"],
    getGifts: ["city"],
    updateBoothsData:["boothsData"],
    updateCity:["city"],
    doOtp:["navigation", "data"],
    doVerifyOtp:["navigation", "phoneNumber", "otp"],
    updatePhoneNumber:["phoneNumber"],
    checkSmsAccountBalance:["navigation"],
    updateSmsBalance:["smsBalance"],
    getAllOtps: ["searchPhoneNumber"],
    updateOtpList:["otpList"],
    updateIsLoggedIn:["isLoggedIn"]
  },
  {
    prefix: "ACTIONS/"
  }
);

export { Types, actions };