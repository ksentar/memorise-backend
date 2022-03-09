import { Injectable } from '@nestjs/common';
import { getRepository } from 'fireorm';
import { DictionaryApiService } from '../dictionary-api/dictionary-api.service';
import { MemoriseWord } from '../entities/memorise-word.entity';

@Injectable()
export class MemoriseService {
  constructor(private dictionaryApiService: DictionaryApiService) {}

  async memoriseWord(word: string) {
    const r = await this.dictionaryApiService.getTranslate(word);
    await getRepository(MemoriseWord).create({
      homographs: [
        {
          meta: r[0].meta,
          hwi_hw: r[0].hwi.hw,
          fl: r[0].fl,
          shortdef: r[0].shortdef[0],
        },
        {
          meta: r[1].meta,
          hwi_hw: r[1].hwi.hw,
          fl: r[1].fl,
          shortdef: r[1].shortdef[0],
        },
      ],
      id: `${word}`,
    });
    console.log(`${word} added to firebase`);
  }
}
