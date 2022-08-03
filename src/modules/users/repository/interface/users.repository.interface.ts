import { UserCreateDto, UserReadDto, UserUpdateDto } from '../../dtos';
import { UserAuthDto } from '../../dtos/user-auth.dto';

export interface UsersRepositoryInterface {
  getAll(): Promise<UserReadDto[]>;

  getOneById(id: number): Promise<UserReadDto>;

  getOneByUsername(username: string): Promise<UserAuthDto>;

  createOne(userDto: UserCreateDto): Promise<UserReadDto>;

  updateOneById(id: number, user: UserUpdateDto): Promise<UserReadDto>;

  deleteOneById(id: number): Promise<UserReadDto>;
}
