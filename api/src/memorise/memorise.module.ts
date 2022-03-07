import { Module } from '@nestjs/common';
import { DictionaryApiModule } from '../dictionary-api/dictionary-api.module';
import { MemoriseCommand } from './memorise.command';
import { MemoriseService } from './memorise.service';

@Module({
  imports: [DictionaryApiModule],
  providers: [MemoriseService, MemoriseCommand],
})
export class MemoriseModule {}
