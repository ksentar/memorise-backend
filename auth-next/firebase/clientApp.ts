import firebase, { initializeApp } from "firebase/app";
import "firebase/auth";
import {
  connectAuthEmulator,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC9wBV-n68vsI4PCmg9Kmjpj8U3JFG58jE",
  authDomain: "fir-bab30.firebaseapp.com",
  projectId: "fir-bab30",
  storageBucket: "fir-bab30.appspot.com",
  messagingSenderId: "336618135968",
  appId: "1:336618135968:web:50be0eb5d3f3d94d3144c5",
  measurementId: "G-CV4LCB2NT9",
});

const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://localhost:9099");

const password = "qwe123";
const email = "jojo@example.com";

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

export default signInWithEmailAndPassword;
