import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DictionaryApiService {
  constructor(private httpService: HttpService) {}

  async findAll(word) {
    try {
      const response = this.httpService.get(
        `https://dictionaryapi.com/api/v3/references/spanish/json/${word}?key=b6b6542e-b0e6-4ccc-8a2e-c6c2f0a221dc`,
      );
      const finalNumber = await lastValueFrom(response);
      console.log(finalNumber.data[0].hwi.prs[0].sound.audio);
    } catch (error) {
      console.error(error);
    }
  }
}
