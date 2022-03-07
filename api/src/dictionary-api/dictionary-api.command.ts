import { Injectable } from '@nestjs/common';
import { Command, Positional } from 'nestjs-command';
import { DictionaryApiService } from './dictionary-api.service';

@Injectable()
export class DictionaryApiCommand {
  constructor(private dictionaryService: DictionaryApiService) {}

  @Command({
    command: 'dictionary-api:test <word>',
    describe: '',
  })
  async test(@Positional({ name: 'word' }) word: string) {
    const r = await this.dictionaryService.getTranslate(word);

    console.log(r);
  }
}
