import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, connectAuthEmulator } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup} from "firebase/auth";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyC9wBV-n68vsI4PCmg9Kmjpj8U3JFG58jE",
  authDomain: "fir-bab30.firebaseapp.com",
  projectId: "fir-bab30",
  storageBucket: "fir-bab30.appspot.com",
  messagingSenderId: "336618135968",
  appId: "1:336618135968:web:50be0eb5d3f3d94d3144c5",
  measurementId: "G-CV4LCB2NT9"
});


// const db = getFirestore(); 
// const todosCol = collection(db, 'todos');
// const snapshot = await getDocs(todosCol);

const provider = new GoogleAuthProvider();

export const auth = getAuth();
connectAuthEmulator(auth, "http://localhost:9099");

  console.log(signInWithPopup)
// onAuthStateChanged(auth, user => {
//    if(user != null){
//      console.log('logged in!');
//     } else {
//       console.log('No user');
//     }
//   });

  console.log()



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
