import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { FireormModule } from 'nestjs-fireorm';
import { User } from '../entity/user.entity';
import { UsersCommand } from './users.command';

@Module({
  imports: [FireormModule.forFeature([User])],
  providers: [UsersService, UsersCommand],
  exports: [UsersService],
})
export class UsersModule {}
