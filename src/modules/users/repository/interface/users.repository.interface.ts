import { UserCreateDto, UserReadDto, UserUpdateDto } from '../../dtos';

export interface UsersRepositoryInterface {
  getAll(): Promise<UserReadDto[]>;

  getOneById(id: number): Promise<UserReadDto>;

  getOneByUsername(username: string): Promise<UserReadDto>;

  createOne(userDto: UserCreateDto): Promise<UserReadDto>;

  updateOneById(id: number, user: UserUpdateDto): Promise<UserReadDto>;

  deleteOneById(id: number): Promise<UserReadDto>;
}
