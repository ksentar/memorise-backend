import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { FirebaseService } from './firebase.service';

@Injectable()
export class FirebaseCommand {
  constructor(private firebaseService: FirebaseService) {}

  @Command({
    command: 'firebase:test',
    describe: '',
  })
  async test() {
    console.log('Begin test');

    console.log(process.env.FIRESTORE_EMULATOR_HOST);

    console.log(await this.firebaseService.test());
    console.log('End test');
  }
}
