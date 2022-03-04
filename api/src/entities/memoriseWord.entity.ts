import { Collection } from 'fireorm';

@Collection()
export class memoriseWord {
  id: string;
  word: string;
  translate: string;
  translate2: any;
  transcription: string;
}
