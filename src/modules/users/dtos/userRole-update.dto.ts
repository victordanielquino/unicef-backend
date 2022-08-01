import { PartialType } from '@nestjs/swagger';
import { UserRoleReadDto } from './userRole-read.dto';

export class UserRoleUpdateDto extends PartialType(UserRoleReadDto) {}
