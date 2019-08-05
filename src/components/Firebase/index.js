import * as firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

const firebaseApp = firebase.initializeApp({
  //Production
  apiKey: "AIzaSyCERGoDi2oQfr-o3sSEkVR-b19wJrtu8H0",
  authDomain: "prugoodprd.firebaseapp.com",
  databaseURL: "https://prugoodprd.firebaseio.com",
  projectId: "prugoodprd",
  storageBucket: "",
  messagingSenderId: "186639640170",
  appId: "1:186639640170:web:5b7a5a6b0206c286"

  // apiKey: "AIzaSyBOFGzQIrAmR_npvTVgtYLNMAGXrC1ryZE",
  // authDomain: "prugood-7a99a.firebaseapp.com",
  // databaseURL: "https://prugood-7a99a.firebaseio.com",
  // projectId: "prugood-7a99a",
  // storageBucket: "prugood-7a99a.appspot.com",
  // messagingSenderId: "319012787187",
  // appId: "1:319012787187:web:3e609a05635aa231"
});

const firebaseService = new ReduxSagaFirebase(firebaseApp);

export default firebaseService;
