import { UsersRepositoryInterface } from './interface/users.repository.interface';
import { plainToClass } from 'class-transformer';
import { Client } from 'pg';

import { UserCreateDto, UserReadDto, UserUpdateDto } from '../dtos';
import { UserEntity } from '../../../core/models/entities';
import { log } from 'util';

export class UsersRepository implements UsersRepositoryInterface {
  constructor(private _client: Client) {}

  async getAll(): Promise<UserReadDto[]> {
    try {
      const response = await this._client.query('select * from users;');
      const users: UserEntity[] = response.rows;
      return users.map((item: UserEntity) => {
        item.id = parseInt(String(item.id));
        item.ant_id = parseInt(String(item.ant_id));
        return plainToClass(UserReadDto, item);
      });
    } catch (e) {
      console.log('error - UsersRepository - getAll:', e);
    }
    return null;
  }

  async getOneById(id: number): Promise<UserReadDto> {
    const sql = 'select * from users where id=$1';
    const values = [id];
    const data = await this._client.query(sql, values);
    const user: UserEntity = data.rows[0];
    user.id = parseInt(String(user.id));
    user.ant_id = parseInt(String(user.ant_id));
    return plainToClass(UserReadDto, user);
  }

  async createOne(userDto: UserCreateDto): Promise<UserReadDto> {
    try {
      await this._client.query('begin;');
      // select * from users_crud(0, 'ERICK', 'ERICK', true, 0, 'create');
      let sql = 'select * from users_crud($1, $2, $3, $4, $5, $6);';
      let values = [
        0,
        userDto.username,
        userDto.password,
        userDto.state,
        userDto.antId,
        'create',
      ];
      const data = await this._client.query(sql, values);
      const user: UserEntity = data.rows[0];
      user.id = parseInt(String(user.id));

      sql =
        'insert into users_roles (user_id, role_id) values ($1,$2) returning *';
      values = [user.id, userDto.roleId];
      const resp = await this._client.query(sql, values);

      await this._client.query('commit;');
      return plainToClass(UserReadDto, user);
    } catch (error) {
      console.log(error);
      await this._client.query('rollback;');
      return null;
    }
  }

  deleteOneById(id: number): Promise<UserReadDto> {
    return Promise.resolve(undefined);
  }

  async getOneByUsername(username: string): Promise<UserReadDto> {
    const sql = 'select * from users where username=$1';
    const values = [username];
    const response = await this._client.query(sql, values);
    const user: UserEntity = response.rows[0];
    return plainToClass(UserReadDto, user);
  }

  updateOneById(id: number, user: UserUpdateDto): Promise<UserReadDto> {
    return Promise.resolve(undefined);
  }
}
