import { UserReadDto } from '../dtos';

export interface UsersServiceInterface {
  getAll(): Promise<UserReadDto[]>;

  getOneById(id: number): Promise<UserReadDto>;
}
