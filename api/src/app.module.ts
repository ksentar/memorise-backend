import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FireormModule } from 'nestjs-fireorm';

@Module({
  imports: [
    CommandModule,
    UsersModule,
    FireormModule.forRoot({
      fireormSettings: { validateModels: true },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
