import { Injectable } from '@nestjs/common';
import { Command, Positional } from 'nestjs-command';
import { DictionaryApiService } from './api.service';

@Injectable()
export class DictionaryApiCommand {
  constructor(private dictionaryService: DictionaryApiService) {}

  @Command({
    command: 'api:get <word>',
    describe: '',
  })
  async getJson(@Positional({ name: 'word' }) word: string) {
    const wordDate = await this.dictionaryService.findAll(word);
    console.log(wordDate);
  }
}
