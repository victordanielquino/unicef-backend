import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'pg';

import { UsersServiceInterface } from './users.service.interface';
import { UserReadDto } from '../dtos';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UsersService implements UsersServiceInterface{
  _userRepository: UserRepository;
  constructor(@Inject('PG') private _client: Client) {
    this._userRepository = new UserRepository(_client);
  }

  async getAll(): Promise<UserReadDto[]> {
    return await this._userRepository.getAll();
  }

  async getOneById(id: number): Promise<UserReadDto> {
    return await this._userRepository.getOneById(id);
  }
}
