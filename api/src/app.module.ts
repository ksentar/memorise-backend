import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from './firebase/firebase.module';
import { DictionaryApiModule } from './api/dictionary-api.module';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './auth/auth.module';
import { FirestoreModule } from './firestore/firestore.module';
import { UsersModule } from './users/users.module';
import { MemoriseModule } from './memorise/memorise.module';

@Module({
  imports: [
    CommandModule,
    FirebaseModule,
    DictionaryApiModule,
    HttpModule,
    AuthModule,
    FirestoreModule,
    UsersModule,
    MemoriseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
