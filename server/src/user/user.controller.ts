import { Controller, Get, Query } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async findOne(@Query('email') email: string): Promise<User> {
    return await this.userService.findOne(email);
  }

}
