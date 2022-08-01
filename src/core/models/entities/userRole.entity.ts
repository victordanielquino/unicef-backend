import { Expose } from 'class-transformer';

export class UserRoleEntity {
  private _id: number;
  private _user_id: number;
  private _role_id: number;
  private _state: string;

  constructor() {}

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get role_id(): number {
    return this._role_id;
  }

  set role_id(value: number) {
    this._role_id = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }
}
