import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './services/users.service';
import { ApiTags } from '@nestjs/swagger';
import { UserCreateDto } from './dtos';
import { AuthDecorator } from '../../core/decorators';
import { AppResourcesEnum } from '../../core/enums';

@ApiTags('CONTROLLER: USERS')
@Controller('users')
export class UsersController {
  constructor(private _userService: UsersService) {}

  @Get()
  @AuthDecorator({
    possession: 'any',
    action: 'read',
    resource: AppResourcesEnum.USER,
  })
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

  @Post()
  async createOne(@Body() dto: UserCreateDto) {
    const data = await this._userService.createOne(dto);
    return {
      message: 'create user ok',
      data,
    };
  }
}
