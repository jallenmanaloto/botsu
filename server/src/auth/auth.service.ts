import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);

    if (!user) {
      throw new UnauthorizedException('No user found');
    }

    const matchedPassword = await bcrypt.compare(pass, user.password);

    if (!matchedPassword) {
      throw new UnauthorizedException('Wrong password');
    }

    const payload = { email: user.email, password: user.password };

    return {
      message: 'Successfully signed in',
      email: user.email,
      name: user.name,
      id: user.id,
      access_token: await this.jwtService.signAsync(payload)
    }
  }
}
