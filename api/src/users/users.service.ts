import { Injectable, Logger } from '@nestjs/common';
import { BaseFirestoreRepository } from 'fireorm';
import { InjectRepository } from 'nestjs-fireorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private users: BaseFirestoreRepository<User>,
  ) {}

  async findOne(id: string): Promise<User> {
    return await this.users.findById(id);
  }
}
