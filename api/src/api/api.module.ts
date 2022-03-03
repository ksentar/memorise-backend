import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DictionaryApiCommand } from './api.command';
import { DictionaryApiService } from './api.service';

@Module({
  imports: [HttpModule],
  providers: [DictionaryApiService, DictionaryApiCommand],
})
export class DictionaryApiModule {}
