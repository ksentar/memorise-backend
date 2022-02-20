import { Injectable } from '@nestjs/common';
import { Command, Positional } from 'nestjs-command';
import { UsersService } from './users.service';

@Injectable()
export class UsersCommand {
  constructor(private usersService: UsersService) {}

  @Command({
    command: 'users:test-select <id>',
    describe: '',
  })
  async getUser(@Positional({ name: 'id' }) id: string) {
    const r = await this.usersService.findOne(id);
    console.log(r);
  }
}
