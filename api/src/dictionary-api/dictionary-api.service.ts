import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class DictionaryApiService {
  constructor(private httpService: HttpService) {}

  findAll(): Observable<AxiosResponse> {
    return this.httpService.get(
      'https://dictionaryapi.com/api/v3/references/spanish/json/hello?key=b6b6542e-b0e6-4ccc-8a2e-c6c2f0a221dc',
    );
  }
}
