import {
  UserRoleCreateDto,
  UserRoleReadDto,
  UserRoleUpdateDto,
} from '../../dtos';

export interface UserRoleRepositoryInterface {
  getAll(): Promise<UserRoleReadDto[]>;

  getOneById(id: number): Promise<UserRoleReadDto>;

  getOneByUserId(id: number): Promise<UserRoleReadDto>;

  createOne(userRole: UserRoleCreateDto): Promise<UserRoleReadDto>;

  updateOneById(
    id: number,
    userRole: UserRoleUpdateDto,
  ): Promise<UserRoleReadDto>;

  deleteOneById(id: number): Promise<UserRoleReadDto>;
}
