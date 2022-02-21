import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DictionaryApiCommand } from './dictionary-api.command';
import { DictionaryApiService } from './dictionary-api.service';

@Module({})
export class DictionaryApiModule {
  import: [HttpModule];
  providers: [DictionaryApiService, DictionaryApiCommand];
  exports: [DictionaryApiService];
}
