import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from './firebase/firebase.module';
import { DictionaryApiModule } from './api/api.module';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './auth/auth.module';
import { FirestoreModule } from './firestore/firestore.module';

@Module({
  imports: [
    CommandModule,
    FirebaseModule,
    DictionaryApiModule,
    HttpModule,
    AuthModule,
    FirestoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
