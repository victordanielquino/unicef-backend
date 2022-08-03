import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/services/users.service';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';
import { PayloadTokenDto } from './dtos/payload-token.dto';
import { RoleEnum } from '../../core/models/enums';
import { UserAuthDto } from '../users/dtos';

@Injectable()
export class AuthService {
  constructor(
    private readonly _userService: UsersService,
    private readonly _jwtService: JwtService,
  ) {}

  // METODO DE VALIDACION:
  async validateUser(username: string, password: string) {
    const user: UserAuthDto = await this._userService.getOneByUsername(
      username,
    );
    if (user && user.password) {
      const isMath = await bcrypt.compare(password, user.password);
      if (isMath) {
        delete user.password;
        console.log('validate:', user);
        return user;
      }
    }
    return null;
  }

  login(user: UserAuthDto) {
    const roles: string[] = [user.role.initial];
    const payloadToken: PayloadTokenDto = {
      id: parseInt(String(user.id)),
      username: user.username,
      roles: roles.map((item) => RoleEnum[item] || 'SR'),
    };
    return {
      access_token: this._jwtService.sign(payloadToken),
      user,
    };
  }
}
