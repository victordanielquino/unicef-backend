import { PartialType } from '@nestjs/swagger';
import { RoleReadDto } from './role-read.dto';

export class RoleUpdateDto extends PartialType(RoleReadDto) {}
