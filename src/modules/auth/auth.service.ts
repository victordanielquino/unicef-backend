import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/services/users.service';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';
import { UserEntity } from '../../core/models/entities';
import { PayloadTokenDto } from './dtos/payload-token.dto';
import { RoleEnum } from '../../core/models/enums';

@Injectable()
export class AuthService {
  constructor(
    private readonly _userService: UsersService,
    private readonly _jwtService: JwtService,
  ) {}

  // METODO DE VALIDACION:
  async validateUser(username: string, password: string) {
    const user = await this._userService.getOneByUsername(username);
    if (user && user.password) {
      const isMath = await bcrypt.compare(password, user.password);
      if (isMath) {
        return user;
      }
    }
    return null;
  }

  login(user: UserEntity) {
    const roles: string[] = ['ADMIN'];
    const payloadToken: PayloadTokenDto = {
      id: parseInt(String(user.id)),
      username: user.username,
      roles: roles.map((r) => r as RoleEnum),
    };
    return {
      access_token: this._jwtService.sign(payloadToken),
      user,
    };
  }
}
