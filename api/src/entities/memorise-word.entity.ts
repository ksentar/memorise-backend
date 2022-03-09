import { Collection } from 'fireorm';

@Collection()
export class MemoriseWord {
  id: string;
  homographs: any;
}
