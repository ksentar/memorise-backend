import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup} from "firebase/auth";
import { auth} from "./index.js";


const provider = new GoogleAuthProvider();
const Login = () =>{
     signInWithPopup(auth, provider)
  .then((result) => {
      console.log(result)
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })
};

  export default Login;