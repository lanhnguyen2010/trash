import * as firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAx7SCZvR4lo6ovKEK_m97M-OhrW4Spnn0",
  authDomain: "myfirstapp-8e0d6.firebaseapp.com",
  databaseURL: "https://myfirstapp-8e0d6.firebaseio.com",
  projectId: "myfirstapp-8e0d6",
  storageBucket: "myfirstapp-8e0d6.appspot.com",
  messagingSenderId: "246619864806",
  appId: "1:246619864806:web:20fbbc79603c7e9f"
});

const firebaseService = new ReduxSagaFirebase(firebaseApp);

export default firebaseService;
