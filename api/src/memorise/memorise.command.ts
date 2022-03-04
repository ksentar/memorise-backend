import { Injectable } from '@nestjs/common';
import { Command, Positional } from 'nestjs-command';
import { MemoriseService } from './memorise.service';

@Injectable()
export class MemoriseCommand {
  constructor(private memoriseService: MemoriseService) {}

  @Command({
    command: 'memorise:learn <word>',
    describe: '',
  })
  async test(@Positional({ name: 'word' }) word: string) {
    await this.memoriseService.memoriseWord(word);
  }
}
