import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserRoleCreateDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  @Expose({ name: 'user_id' })
  readonly userId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  @Expose({ name: 'role_id' })
  readonly roleId: number;
}
