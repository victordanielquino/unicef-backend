import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Client } from 'pg';
import * as bcrypt from 'bcrypt';

import { UsersServiceInterface } from './inteface/users.service.interface';
import {
  RoleReadDto,
  UserCreateDto,
  UserReadDto,
  UserRoleReadDto,
  UserUpdateDto,
} from '../dtos';
import { UsersRepository } from '../repository/users.repository';
import { RolesService } from './roles.service';
import { UsersRolesService } from './users-roles.service';
import { UserEntity } from '../../../core/models/entities';
import { UserAuthDto } from '../dtos/user-auth.dto';

@Injectable()
export class UsersService implements UsersServiceInterface {
  _usersRepo: UsersRepository;

  constructor(
    @Inject('PG') private _client: Client,
    private _rolesService: RolesService,
    private _urService: UsersRolesService,
  ) {
    this._usersRepo = new UsersRepository(_client);
  }

  async getAll(): Promise<UserReadDto[]> {
    return await this._usersRepo.getAll();
  }

  async getOneById(id: number): Promise<UserReadDto> {
    if (!id) throw new BadRequestException('debe enviar id de user');
    const user: UserReadDto = await this._usersRepo.getOneById(id);
    if (!user)
      throw new NotFoundException(
        `User con id: ${id} not exist or not authorized`,
      );
    const userRole: UserRoleReadDto = await this._urService.getOneByUserId(
      user.id,
    );
    user.role = await this._rolesService.getOneById(userRole.roleId);
    return user;
  }

  async createOne(userDto: UserCreateDto): Promise<UserReadDto> {
    const existUser = await this._usersRepo.getOneByUsername(userDto.username);
    if (existUser) throw new BadRequestException(`El usuario ya existe`);

    const role: RoleReadDto = await this._rolesService.getOneById(
      userDto.roleId,
    );

    userDto.password = await bcrypt.hash(userDto.password, 10);
    const user = await this._usersRepo.createOne(userDto);
    user.role = role;
    return user;
  }

  deleteOneById(id: number): Promise<UserReadDto> {
    return Promise.resolve(undefined);
  }

  async getOneByUsername(username: string): Promise<UserAuthDto> {
    const user: UserAuthDto = await this._usersRepo.getOneByUsername(username);
    if (!user)
      throw new NotFoundException(
        `User con username: ${username} not exist or not authorized`,
      );
    const userRole: UserRoleReadDto = await this._urService.getOneByUserId(
      user.id,
    );
    user.role = await this._rolesService.getOneById(userRole.roleId);
    return user;
  }

  updateOneById(id: number, user: UserUpdateDto): Promise<UserReadDto> {
    return Promise.resolve(undefined);
  }
}
