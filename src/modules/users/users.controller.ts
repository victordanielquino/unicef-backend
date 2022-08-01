import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './services/users.service';
import { ApiTags } from '@nestjs/swagger';
import { UserCreateDto } from './dtos';

@ApiTags('CONTROLLER: USERS')
@Controller('users')
export class UsersController {
  constructor(private _userService: UsersService) {}

  @Get()
  async getAll() {
    const data = await this._userService.getAll();
    console.log(data);
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

  @Post()
  async createOne(@Body() dto: UserCreateDto) {
    const data = await this._userService.createOne(dto);
    return {
      message: 'create user ok',
      data,
    };
  }
}
