import * as firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCERGoDi2oQfr-o3sSEkVR-b19wJrtu8H0",
  authDomain: "prugoodprd.firebaseapp.com",
  databaseURL: "https://prugoodprd.firebaseio.com",
  projectId: "prugoodprd",
  storageBucket: "",
  messagingSenderId: "186639640170",
  appId: "1:186639640170:web:5b7a5a6b0206c286"
});

const firebaseService = new ReduxSagaFirebase(firebaseApp);

export default firebaseService;
