import firebaseui from "firebaseui";
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import signInWithEmailAndPassword from "../firebase/clientApp";

function SignInScreen() {
  return (
    <div
      style={{
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Memorise login</h1>
      <p>Please sign-in:</p>
      <button onClick={signInWithEmailAndPassword}> SignIn</button>
    </div>
  );
}

export default SignInScreen;
