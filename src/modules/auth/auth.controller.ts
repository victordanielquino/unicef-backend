import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { UserDecorator } from '../../core/decorators';
import { UserEntity } from '../../core/models/entities';
import { AuthLocalGuard } from '../../core/guards';
import { UserAuthDto } from '../users/dtos';

@ApiTags('Controller: Auth')
@Controller('auth')
export class AuthController {
  constructor(private _authService: AuthService) {}

  @UseGuards(AuthLocalGuard)
  @Post('login')
  async login(@Body() payload: LoginDto, @UserDecorator() user: UserAuthDto) {
    return {
      message: 'login exitos',
      data: this._authService.login(user),
    };
  }

  @Get('profile')
  profile(@UserDecorator() user: UserEntity) {
    return {
      message: 'profile',
      user,
    };
  }

  @Get('refresh')
  refreshToken(@UserDecorator() user: UserAuthDto) {
    const data = this._authService.login(user);
    return {
      message: 'refresh token',
      data,
    };
  }
}
