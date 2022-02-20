import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersCommand } from './users.command';

@Module({
  providers: [UsersService, UsersCommand],
  exports: [UsersService],
})
export class UsersModule {}
