import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'pg';

@Injectable()
export class UsersService {
  constructor(@Inject('PG') private _client: Client) {}

  getAll() {
    return new Promise((resolve, reject) => {
      this._client.query('select * from users', (err, resp) => {
        err ? reject(err): resolve(resp.rows);
      });
    });
  }
}
