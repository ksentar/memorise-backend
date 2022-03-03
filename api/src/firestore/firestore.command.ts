import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { FirestoreService } from './firestore.service';

@Injectable()
export class FirestoreCommand {
  constructor(private firestoreService: FirestoreService) {}

  @Command({
    command: 'firestore:test',
    describe: '',
  })
  async test() {
    console.log('Begin test');
    console.log(this.firestoreService.test());
    console.log('End test');
  }
}
