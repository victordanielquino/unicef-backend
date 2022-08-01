import { plainToClass } from 'class-transformer';
import { Client } from 'pg';

import { RolesRepositoryInterface } from './interface/roles.repository.interface';
import { RoleCreateDto, RoleReadDto, RoleUpdateDto } from '../dtos';
import { RoleEntity } from '../../../core/models/entities';

export class RolesRepository implements RolesRepositoryInterface {
  constructor(private _client: Client) {}

  createOne(role: RoleCreateDto): Promise<RoleReadDto> {
    return Promise.resolve(undefined);
  }

  deleteOneById(id: number): Promise<RoleReadDto> {
    return Promise.resolve(undefined);
  }

  async getAll(): Promise<RoleReadDto[]> {
    try {
      const data = await this._client.query('select * from roles;');
      const roles: RoleEntity[] = data.rows;
      return roles.map((item: RoleEntity) => plainToClass(RoleReadDto, item));
    } catch (e) {
      console.log('error - UsersRepository - getAll:', e);
      return null;
    }
  }

  async getOneById(id: number): Promise<RoleReadDto> {
    const sql = 'select * from roles where id=$1';
    const values = [id];
    const data = await this._client.query(sql, values);
    const role: RoleEntity = data.rows[0];
    role.id = parseInt(String(role.id));
    return plainToClass(RoleReadDto, role);
  }

  updateOneById(id: number, role: RoleUpdateDto): Promise<RoleReadDto> {
    return Promise.resolve(undefined);
  }
}
