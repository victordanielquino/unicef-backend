import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

export class UserRoleReadDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly id: number;

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
