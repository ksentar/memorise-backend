import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // await admin.initializeApp({ projectId: 'fir-bab30' });
  // const firestore = admin.firestore();
  // await fireorm.initialize(firestore);
}
bootstrap();
