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
    updateCity:["city"],
    doOtp:["navigation", "data"],
    doVerifyOtp:["navigation", "phoneNumber", "otp"],
    updatePhoneNumber:["phoneNumber"],
    checkSmsAccountBalance:["navigation"],
    updateSmsBalance:["smsBalance"],
    getAllOtps: ["searchPhoneNumber"],
    updateOtpList:["otpList"],
    updateIsLoggedIn:["isLoggedIn"],
    updateBoothsData:["boothsData"],
    getAllPlayers: null,
    updatePlayers: ["players"],
    resendOtp: null,
    updateQuizResults:["quizResults"],
    getAllQuizResults:null,
    updateGiftResults:["giftResults"],
    getAllGiftResults:null,
    checkIsPhoneNumberExist: ["phoneNumber", "data", "history"],
    updateIsPhoneNumberExist:["isPhoneNumberExist"],

    //QUIZ
    updateSelectedTrashType:["selectedTrash"],
    updateSelectedAnswer:["seletedAnswer"],
    updateAnswerResult: ["answerResult"],
    saveQuizResult: ["question", "answerIndex"],
    updateCorrectAnswerText: ["correctAnswerText"],

    updateInputData: ["inputData"],
    saveGiftResult: ["giftType"],
    updateGiftCount: ["selectedGift"],

    updateLoggingIn: ["isLogging"],
    updateDoingOtp: ["isDoingOtp"],

    endFlow: null
  },
  {
    prefix: "ACTIONS/"
  }
);

export { Types, actions };