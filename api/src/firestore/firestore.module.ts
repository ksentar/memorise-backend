import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { FirestoreCommand } from './firestore.command';
import { FirestoreService } from './firestore.service';

@Module({
  providers: [FirestoreService, FirestoreCommand],
})
export class FirestoreModule implements OnModuleInit {
  private logger = new Logger(FirestoreModule.name);

  constructor(private firestoreService: FirestoreService) {}

  onModuleInit() {
    this.logger.log('Init FirebaseModule');

    this.firestoreService.init();
  }
}
