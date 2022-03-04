import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { dictionaryApiKey } from '../config/configuration';
import { getRepository } from 'fireorm';
import { User } from '../entities/user.entity';
import { memoriseWord } from '../entities/memoriseWord.entity';

@Injectable()
export class DictionaryApiService {
  constructor(private httpService: HttpService) {}

  async getTranslate(word: string) {
    const r = await lastValueFrom(
      this.httpService.get(
        `https://dictionaryapi.com/api/v3/references/spanish/json/${word}?key=${dictionaryApiKey}`,
      ),
    );
    console.log(r.data[0].def[0].sseq[0]);
    return r.data;
  }
}
