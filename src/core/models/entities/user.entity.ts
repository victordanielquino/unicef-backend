import { Expose } from 'class-transformer';

export class UserEntity {
  private _id: number;
  private _username: string;
  private _password: string;
  private _enabled: boolean;
  private _intent: number;
  private _state: string;
  private _ant_id: number;

  constructor() {}

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get enabled(): boolean {
    return this._enabled;
  }

  set enabled(value: boolean) {
    this._enabled = value;
  }

  get intent(): number {
    return this._intent;
  }

  set intent(value: number) {
    this._intent = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get ant_id(): number {
    return this._ant_id;
  }

  set ant_id(value: number) {
    this._ant_id = value;
  }
}
