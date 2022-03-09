import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { dictionaryApiKey } from '../config/configuration';

@Injectable()
export class DictionaryApiService {
  constructor(private httpService: HttpService) {}

  async getTranslate(word: string) {
    const r = await lastValueFrom(
      this.httpService.get<
        {
          meta: { id: string };
          shortdef: string[];
          hwi: { hw: string; prs: string };
          fl: string;
        }[]
      >(
        `https://dictionaryapi.com/api/v3/references/spanish/json/${word}?key=${dictionaryApiKey}`,
      ),
    );

    return r.data;
  }
}
