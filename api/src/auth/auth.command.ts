import { Injectable } from '@nestjs/common';
import { Command, Positional } from 'nestjs-command';
import { AuthService } from './auth.service';

@Injectable()
export class AuthCommand {
  constructor(private authService: AuthService) {}

  @Command({
    command: 'auth:create-user',
    describe: '',
  })
  async createUser() {
    console.log('Begin create-user');
    await this.authService.createUser();
    console.log('End create-user');
  }

  @Command({
    command: 'auth:get-user',
    describe: '',
  })
  async getUser() {
    console.log('Begin get-user');
    await this.authService.getUser();
    console.log('End get-user');
  }
  D;
  @Command({
    command: 'auth:verify <token>',
    describe: '',
  })
  async verify(@Positional({ name: 'token' }) token: string) {
    console.log('Begin verify-token');
    await this.authService.verify(token);
    console.log('End verify-token');
  }
}
