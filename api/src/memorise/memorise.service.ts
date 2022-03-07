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
      word,
      translate: r.map((v) => v.meta),
      transcription: `${r.meta}`,
    });
  }
}
