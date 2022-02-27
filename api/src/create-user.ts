import admin from 'firebase-admin';

const main = async () => {
  admin.initializeApp();

  const email = 'test2@example.com';
  const password = 'qwe123';

  await admin.auth().createUser({
    email,
    password,
  });

  const user = await admin.auth().getUserByEmail(email);

  console.log(user);
};

main();
