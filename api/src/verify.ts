import { applicationDefault, initializeApp } from 'firebase-admin/app';
import admin from 'firebase-admin';

admin.initializeApp({
  credential: applicationDefault(),
});

admin
  .auth()
  .verifyIdToken(
    'eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJuYW1lIjoiIiwicGljdHVyZSI6IiIsImVtYWlsIjoibWF4QG1hLnJ1IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJhdXRoX3RpbWUiOjE2NDU5NDk3NzcsInVzZXJfaWQiOiJHaFVhNzRENVJOZTQ4MGp0Y2ZkbGlQQ0gxeWdiIiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtYXhAbWEucnUiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9LCJpYXQiOjE2NDU5NDk3NzcsImV4cCI6MTY0NTk1MzM3NywiYXVkIjoiZmlyLWJhYjMwIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2Zpci1iYWIzMCIsInN1YiI6IkdoVWE3NEQ1Uk5lNDgwanRjZmRsaVBDSDF5Z2IifQ.',
  )
  .then((decodedToken) => {
    const uid = decodedToken.uid;
    // ...
    console.log(uid);
  })
  .catch((error) => {
    console.log({ error });

    // Handle error
  });
