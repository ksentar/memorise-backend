import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { FirebaseService } from './firebase.service';

@Module({
  providers: [FirebaseService],
})
export class FirebaseModule implements OnModuleInit {
  private logger = new Logger(FirebaseModule.name);

  constructor(private firebaseService: FirebaseService) {}

  onModuleInit() {
    this.logger.log('Init FirebaseModule');

    this.firebaseService.init();
  }
}
