import { UsersRepositoryInterface } from './users.repository.interface';
import { UserReadDto } from '../dtos';
import { UserEntity } from '../entities/user.entity';
import { plainToClass } from 'class-transformer';
import { Client } from 'pg';

export class UserRepository implements UsersRepositoryInterface {
  constructor(private _client: Client) {}

  async getAll(): Promise<UserReadDto[]> {
    try {
      const response = await this._client.query('select * from users;');
      const users: UserEntity[] = response.rows;
      return users.map((item: UserEntity) => plainToClass(UserReadDto, item));
    } catch (e) {
      console.log('error - UserRepository - getAll:', e);
    }
    return null;
  }

  async getOneById(id: number): Promise<UserReadDto> {
    const sql = 'select * from users where id=$1';
    const values = [id];
    const response = await this._client.query(sql, values);
    const user: UserEntity = response.rows[0];
    console.log(user.id);
    return plainToClass(UserReadDto, user);
  }
}
