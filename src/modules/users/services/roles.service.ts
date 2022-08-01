import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { RolesServiceInterface } from './inteface/roles.service.interface';
import { RoleCreateDto, RoleReadDto, RoleUpdateDto } from '../dtos';
import { RolesRepository } from '../repository/roles.repository';
import { Client } from 'pg';

@Injectable()
export class RolesService implements RolesServiceInterface {
  _rolesRepo: RolesRepository;

  constructor(@Inject('PG') private _client: Client) {
    this._rolesRepo = new RolesRepository(_client);
  }

  async getAll(): Promise<RoleReadDto[]> {
    return await this._rolesRepo.getAll();
  }

  async getOneById(id: number): Promise<RoleReadDto> {
    if (!id) throw new BadRequestException('debe enviar id de role');
    const role: RoleReadDto = await this._rolesRepo.getOneById(id);
    if (!role)
      throw new NotFoundException(
        `Role with id: ${id} not exist or not authorized`,
      );
    return role;
  }

  async createOne(role: RoleCreateDto): Promise<RoleReadDto> {
    return await this._rolesRepo.createOne(role);
  }

  async deleteOneById(id: number): Promise<RoleReadDto> {
    if (!id) throw new BadRequestException('debe enviar id de role');
    const role: RoleReadDto = await this._rolesRepo.getOneById(id);
    if (!role)
      throw new NotFoundException(
        `Role with id: ${id} not exist or not authorized`,
      );
    return role;
  }

  updateOneById(id: number, role: RoleUpdateDto): Promise<RoleReadDto> {
    return Promise.resolve(undefined);
  }
}
