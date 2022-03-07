import { Collection } from 'fireorm';

@Collection()
export class MemoriseWord {
  id: string;
  word: string;
  translate: string[];
  transcription: string;
}
