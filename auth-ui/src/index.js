import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup} from "firebase/auth";


var firebase = require('firebase');
var firebaseui = require('firebaseui');


var ui = new firebaseui.auth.AuthUI(firebase.auth());


// const firebaseApp = initializeApp({});


//  const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://localhost:9099");

//   console.log(signInWithPopup)
// onAuthStateChanged(auth, user => {
//    if(user != null){
//      console.log('logged in!');
//     } else {
//       console.log('No user');
//     }
//   });





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
