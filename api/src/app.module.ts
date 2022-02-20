import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [CommandModule, FirebaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
