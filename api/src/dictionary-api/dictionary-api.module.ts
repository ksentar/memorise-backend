import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DictionaryApiCommand } from './dictionary-api.command';
import { DictionaryApiService } from './dictionary-api.service';

@Module({
  imports: [HttpModule],
  providers: [DictionaryApiService, DictionaryApiCommand],
})
export class DictionaryApiModule {}
