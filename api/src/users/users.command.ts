import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { UsersService } from './users.service';

@Injectable()
export class UsersCommand {
  constructor(private usersService: UsersService) {}

  @Command({
    command: 'users:test-select',
    describe: '',
  })
  async getUser() {
    await this.usersService.findOne;
    console.log(this.usersService.findOne);
  }
}
