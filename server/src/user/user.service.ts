import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity'
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: UserRepository) { }

  create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    const savedUser = this.userRepository.save(newUser);

    return savedUser;
  }


  async findOne(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email: email } })
  }
}
