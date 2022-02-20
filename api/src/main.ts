import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';
import { database } from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (!admin.apps.length) {
    admin.initializeApp({
      projectId: 'fir-bab30',
      databaseURL: 'http://localhost:8090',
    });
  }
  console.log(admin.SDK_VERSION, 'app');
  // await admin.initializeApp({ projectId: 'fir-bab30' });
  // const firestore = admin.firestore();
  // await fireorm.initialize(firestore);
}
bootstrap();
