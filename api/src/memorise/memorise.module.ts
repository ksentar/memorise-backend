import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MemoriseCommand } from './memorise.command';
import { MemoriseService } from './memorise.service';

@Module({
  imports: [HttpModule],
  providers: [MemoriseService, MemoriseCommand],
})
export class MemoriseModule {}
