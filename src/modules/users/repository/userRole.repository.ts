import { plainToClass } from 'class-transformer';
import { Client } from 'pg';

import { UserRoleCreateDto, UserRoleReadDto, UserRoleUpdateDto } from '../dtos';
import { UserRoleRepositoryInterface } from './interface/userRole.repository.interface';
import { UserRoleEntity } from '../../../core/models/entities';

export class UserRoleRepository implements UserRoleRepositoryInterface {
  constructor(private _client: Client) {}

  async getAll(): Promise<UserRoleReadDto[]> {
    try {
      const data = await this._client.query('select * from users_roles;');
      const ur: UserRoleEntity[] = data.rows;
      return ur.map((item: UserRoleEntity) =>
        plainToClass(UserRoleReadDto, item),
      );
    } catch (e) {
      console.log('error - UsersRepository - getAll:', e);
      return null;
    }
  }

  async getOneById(id: number): Promise<UserRoleReadDto> {
    const sql = 'select * from users_roles where id=$1';
    const values = [id];
    const data = await this._client.query(sql, values);
    const ur: UserRoleEntity = data.rows[0];
    return plainToClass(UserRoleReadDto, ur);
  }

  async deleteOneById(id: number): Promise<UserRoleReadDto> {
    return Promise.resolve(undefined);
  }

  async updateOneById(
    id: number,
    userRole: UserRoleUpdateDto,
  ): Promise<UserRoleReadDto> {
    return Promise.resolve(undefined);
  }

  createOne(userRole: UserRoleCreateDto): Promise<UserRoleReadDto> {
    return Promise.resolve(undefined);
  }

  async getOneByUserId(id: number): Promise<UserRoleReadDto> {
    try {
      const sql = 'select * from users_roles where user_id=$1';
      const values = [id];
      const data = await this._client.query(sql, values);
      const ur: UserRoleEntity = data.rows[0];
      ur.id = parseInt(String(ur.id));
      ur.role_id = parseInt(String(ur.role_id));
      ur.user_id = parseInt(String(ur.user_id));
      return plainToClass(UserRoleReadDto, ur);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
