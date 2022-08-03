import { UsersRepositoryInterface } from './interface/users.repository.interface';
import { plainToClass } from 'class-transformer';
import { Client } from 'pg';

import { UserCreateDto, UserReadDto, UserUpdateDto } from '../dtos';
import { UserEntity } from '../../../core/models/entities';
import { UserAuthDto } from '../dtos/user-auth.dto';

export class UsersRepository implements UsersRepositoryInterface {
  constructor(private _client: Client) {}

  async getAll(): Promise<UserReadDto[]> {
    try {
      const response = await this._client.query('select * from users;');
      const users: UserEntity[] = response.rows;
      return users.map((item: UserEntity) =>
        plainToClass(UserReadDto, item, { excludeExtraneousValues: true }),
      );
    } catch (e) {
      console.log('error - UsersRepository - getAll:', e);
      return null;
    }
  }

  async getOneById(id: number): Promise<UserReadDto> {
    try {
      const sql = 'select * from users where id=$1';
      const values = [id];
      const data = await this._client.query(sql, values);
      const user: UserEntity = data.rows[0];
      console.log('user:', user);
      return plainToClass(UserReadDto, user, { excludeExtraneousValues: true });
    } catch (e) {
      console.log('error:', e);
      return null;
    }
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
      return plainToClass(UserReadDto, user, { excludeExtraneousValues: true });
    } catch (error) {
      console.log(error);
      await this._client.query('rollback;');
      return null;
    }
  }

  deleteOneById(id: number): Promise<UserReadDto> {
    return Promise.resolve(undefined);
  }

  async getOneByUsername(username: string): Promise<UserAuthDto> {
    try {
      const sql = 'select * from users where username=$1';
      const values = [username];
      const data = await this._client.query(sql, values);
      const user: UserEntity = data.rows[0];
      return plainToClass(UserAuthDto, user, { excludeExtraneousValues: true });
    } catch (e) {
      console.log('error getOneByUsername', e);
      return null;
    }
  }

  updateOneById(id: number, user: UserUpdateDto): Promise<UserReadDto> {
    return Promise.resolve(undefined);
  }
}
