import * as firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBOFGzQIrAmR_npvTVgtYLNMAGXrC1ryZE",
  authDomain: "prugood-7a99a.firebaseapp.com",
  databaseURL: "https://prugood-7a99a.firebaseio.com",
  projectId: "prugood-7a99a",
  storageBucket: "",
  messagingSenderId: "319012787187",
  appId: "1:319012787187:web:3e609a05635aa231"
});

const firebaseService = new ReduxSagaFirebase(firebaseApp);

export default firebaseService;
