import { UserReadDto } from '../dtos';

export interface UsersRepositoryInterface {
  getAll(): Promise<UserReadDto[]>;

  getOneById(id: number): Promise<UserReadDto>;
}
