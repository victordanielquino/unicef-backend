import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('CONTROLLER: USERS')
@Controller('users')
export class UsersController {
  constructor(private _userService: UsersService) {}

  @Get()
  async getAll() {
    const data = await this._userService.getAll();
    return {
      message: 'get all',
      data,
    };
  }

  @Get(':id')
  async getOneById(@Param('id', ParseIntPipe) id: number) {
    const data = await this._userService.getOneById(id);
    return {
      message: 'geto one by id',
      data,
    };
  }
}
