import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {



  apiKey: "AIzaSyAEQvjj5V_7Q5J7NXOpYwStCB8xe1q-nJo",



  authDomain: "signal-clone-sj-build.firebaseapp.com",



  projectId: "signal-clone-sj-build",



  storageBucket: "signal-clone-sj-build.appspot.com",



  messagingSenderId: "634026181866",



  appId: "1:634026181866:web:32e4c4e5b0dc87a021c393"



};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
