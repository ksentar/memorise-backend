import admin from 'firebase-admin';

const main = async () => {
  admin.initializeApp();

  const email = 'test2@example.com';

  const user = await admin.auth().getUserByEmail(email);

  console.log(user);
};

main();
