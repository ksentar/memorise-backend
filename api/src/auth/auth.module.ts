import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService],
})
export class AuthModule implements OnModuleInit {
  private logger = new Logger(AuthModule.name);

  constructor(private authService: AuthService) {}

  onModuleInit() {
    this.logger.log('Init AuthModule');

    this.authService.init();
  }
}
