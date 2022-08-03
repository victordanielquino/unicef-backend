import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Exclude, Expose, Type } from 'class-transformer';
import { RoleReadDto } from './role-read.dto';

export class UserAuthDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'the id of user' })
  @Expose()
  @Type(() => Number)
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'the username of user' })
  @Expose()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Expose()
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Expose()
  readonly state: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  @Type(() => Number)
  @Exclude()
  readonly antId: number;

  @IsOptional()
  @ApiProperty()
  role: RoleReadDto;
}
