import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from "./index.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const password = '123456'
// const email = 'max@ma.ru'

// export const verify = getAuth()
//   .verifyIdToken('eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJlbWFpbCI6Im1heEBtYS5ydSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYXV0aF90aW1lIjoxNjQ1OTQ3NzQ5LCJ1c2VyX2lkIjoiVWVvVmhBTVBDOVpuWFRlOUpMcmNlS0tSM29xayIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWF4QG1hLnJ1Il19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifSwiaWF0IjoxNjQ1OTQ3NzQ5LCJleHAiOjE2NDU5NTEzNDksImF1ZCI6ImZpci1iYWIzMCIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9maXItYmFiMzAiLCJzdWIiOiJVZW9WaEFNUEM5Wm5YVGU5SkxyY2VLS1Izb3FrIn0.')
//   .then((decodedToken) => {
//     const uid = decodedToken.uid;
//     console.log(uid)
//     // ...
//   })
//   .catch((error) => {
//     // Handle error
//   });


// const Email = () =>{ 
//   getAuth()
//   .verifyIdToken('eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJlbWFpbCI6Im1heEBtYS5ydSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYXV0aF90aW1lIjoxNjQ1OTQ3NzQ5LCJ1c2VyX2lkIjoiVWVvVmhBTVBDOVpuWFRlOUpMcmNlS0tSM29xayIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWF4QG1hLnJ1Il19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifSwiaWF0IjoxNjQ1OTQ3NzQ5LCJleHAiOjE2NDU5NTEzNDksImF1ZCI6ImZpci1iYWIzMCIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9maXItYmFiMzAiLCJzdWIiOiJVZW9WaEFNUEM5Wm5YVGU5SkxyY2VLS1Izb3FrIn0.')
//   .then((decodedToken) => {
//     const uid = decodedToken.uid;
//     console.log(`export token ${uid}`)
//     // ...
//   })
//   .catch((error) => {
//     // Handle error
//   })
//   const auth = getAuth()

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user)
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// }

//   export default Email;
  
  