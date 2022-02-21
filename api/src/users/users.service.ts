import { Injectable } from '@nestjs/common';
import { getRepository } from 'fireorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  async test() {
    const userRepository = getRepository(User);

    return userRepository.create({ name: '' });
  }
}
