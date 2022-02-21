import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from './firebase/firebase.module';
import { DictionaryApiModule } from './dictionary-api/dictionary-api.module';
import { UsersCommand } from './users/users.command';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    CommandModule,
    FirebaseModule,
    DictionaryApiModule,
    UsersCommand,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
