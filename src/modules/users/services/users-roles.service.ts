import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersRolesServiceInterface } from './inteface/usersRoles.service.interface';
import { UserRoleCreateDto, UserRoleReadDto, UserRoleUpdateDto } from '../dtos';
import { Client } from 'pg';
import { UserRoleRepository } from '../repository/userRole.repository';
import { UserRoleEntity } from '../../../core/models/entities';

@Injectable()
export class UsersRolesService implements UsersRolesServiceInterface {
  _urRepo: UserRoleRepository;

  constructor(@Inject('PG') private _client: Client) {
    this._urRepo = new UserRoleRepository(_client);
  }

  getAll(): Promise<UserRoleReadDto[]> {
    return Promise.resolve([]);
  }

  getOneById(id: number): Promise<UserRoleReadDto> {
    return Promise.resolve(undefined);
  }

  async getOneByUserId(id: number): Promise<UserRoleReadDto> {
    if (!id) throw new BadRequestException('debe enviar id de user');
    const dto: UserRoleReadDto = await this._urRepo.getOneByUserId(id);
    if (!dto)
      throw new NotFoundException(
        `User con id: ${id} not asigned role or not authorized`,
      );
    return dto;
  }

  createOne(userRole: UserRoleCreateDto): Promise<UserRoleReadDto> {
    return Promise.resolve(undefined);
  }

  deleteOneById(id: number): Promise<UserRoleReadDto> {
    return Promise.resolve(undefined);
  }

  updateOneById(
    id: number,
    userRole: UserRoleUpdateDto,
  ): Promise<UserRoleReadDto> {
    return Promise.resolve(undefined);
  }
}
