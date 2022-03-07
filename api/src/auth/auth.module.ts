import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { AuthCommand } from './auth.command';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService, AuthCommand],
})
export class AuthModule implements OnModuleInit {
  private logger = new Logger(AuthModule.name);

  constructor(private authService: AuthService) {}

  onModuleInit() {
    this.logger.log('Init AuthModule');
  }
}
