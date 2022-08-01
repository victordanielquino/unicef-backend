export class RoleEntity {
  private _id: number;
  private _initial: string;
  private _description: string;
  private _state: string;

  constructor() {}

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get initial(): string {
    return this._initial;
  }

  set initial(value: string) {
    this._initial = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }
}
