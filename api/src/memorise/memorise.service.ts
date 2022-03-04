import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { dictionaryApiKey } from '../config/configuration';
import { getRepository } from 'fireorm';
import { memoriseWord } from '../entities/memoriseWord.entity';

@Injectable()
export class MemoriseService {
  constructor(private httpService: HttpService) {}

  async memoriseWord(word: string) {
    const r = await lastValueFrom(
      this.httpService.get(
        `https://dictionaryapi.com/api/v3/references/spanish/json/${word}?key=${dictionaryApiKey}`,
      ),
    );

    await getRepository(memoriseWord).create({
      word,
      translate: `${r.data[0].shortdef}`,
      translate2: `${r.data[1].shortdef}, ${r.data[2].shortdef} `,
      transcription: `${r.data[0].hwi.prs[0].mw}`,
    });
  }
}
