import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity'
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: UserRepository) { }

  async findOne(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email: email } })
  }
}
