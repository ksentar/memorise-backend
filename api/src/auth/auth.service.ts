import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class AuthService {
  createUser = async () => {
    const email = 'jojo@example.com';
    const password = 'qwe123';

    await admin.auth().createUser({
      email,
      password,
    });
  };

  getUser = async () => {
    const email = 'test2@example.com';

    const user = await admin.auth().getUserByEmail(email);

    console.log(user);
  };

  verify = async (token) => {
    admin
      .auth()
      .verifyIdToken(`${token}`)
      .then((decodedToken) => {
        const uid = decodedToken.uid;
        // ...
        console.log(uid);
      })
      .catch((error) => {
        console.log({ error });

        // Handle error
      });
  };
}
