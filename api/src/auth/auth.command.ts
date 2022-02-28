import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
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
    command: 'auth:get-users',
    describe: '',
  })
  async getUser() {
    console.log('Begin get-user');
    await this.authService.getUser();
    console.log('End get-user');
  }

  @Command({
    command: 'auth:verify',
    describe: '',
  })
  async verify() {
    console.log('Begin get-user');
    await this.authService.verify();
    console.log('End get-user');
  }
}
