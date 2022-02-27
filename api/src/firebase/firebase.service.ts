import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';
import { User } from '../entities/user.entity';

const { getRepository } = fireorm;

@Injectable()
export class FirebaseService {
  init() {
    admin.initializeApp();
  }
}
