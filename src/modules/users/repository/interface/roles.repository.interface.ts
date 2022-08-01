import { RoleCreateDto, RoleReadDto, RoleUpdateDto } from '../../dtos';

export interface RolesRepositoryInterface {
  getAll(): Promise<RoleReadDto[]>;

  getOneById(id: number): Promise<RoleReadDto>;

  createOne(role: RoleCreateDto): Promise<RoleReadDto>;

  updateOneById(id: number, role: RoleUpdateDto): Promise<RoleReadDto>;

  deleteOneById(id: number): Promise<RoleReadDto>;
}
