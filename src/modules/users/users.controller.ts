import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('CONTROLLER: USERS')
@Controller('users')
export class UsersController {
  constructor(private _userService: UsersService) {}

  @Get()
  getAll() {
    return this._userService.getAll();
  }
}
