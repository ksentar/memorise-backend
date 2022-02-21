import { Injectable } from '@nestjs/common';
import { Command, Positional } from 'nestjs-command';
import { DictionaryApiService } from './dictionary-api.service';

@Injectable()
export class DictionaryApiCommand {
  constructor(private dictionaryService: DictionaryApiService) {}

  @Command({
    command: 'dictionary-api:get <word>',
    describe: '',
  })
  async getJson(@Positional({ name: 'word' }) word: string) {
    const r = await this.dictionaryService.findAll(word);
    console.log(r);
  }
}
