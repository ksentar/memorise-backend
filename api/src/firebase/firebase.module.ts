import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { FirebaseCommand } from './firebase.command';
import { FirebaseService } from './firebase.service';

@Module({
  providers: [FirebaseService, FirebaseCommand],
})
export class FirebaseModule implements OnModuleInit {
  private logger = new Logger(FirebaseModule.name);

  constructor(private firebaseService: FirebaseService) {}

  onModuleInit() {
    this.logger.log('Init FirebaseModule');

    this.firebaseService.init();
  }
}
