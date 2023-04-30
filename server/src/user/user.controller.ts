import { Body, Controller, Get, Post, Query, Req, UseGuards, Res, HttpStatus } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedRequest } from '../auth/auth.interface'
import { CreateUserDto } from './dto/create-user-dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response): Promise<Response> {

    const newUser = await this.userService.create(createUserDto);
    if (newUser) return res.status(HttpStatus.CREATED)
      .json({
        message: 'Successfully created a new user',
        user: newUser
      });

    return res.status(HttpStatus.BAD_REQUEST)
      .json({
        message: 'Unable to create a new user',
      });
  }

  @Get()
  async findOne(@Query('email') email: string): Promise<User> {
    return await this.userService.findOne(email);
  }

  @Get('session')
  @UseGuards(AuthGuard('jwt'))
  getUserSession(@Req() req: AuthenticatedRequest) {
    return req.user;
  }

}
