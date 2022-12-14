import {
  IsString,
  IsNotEmpty,
  Length,
  IsBoolean,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {
  Exclude,
  Expose,
  plainToClass,
  Transform,
  Type,
} from 'class-transformer';
import { RoleReadDto } from './role-read.dto';
import { number } from 'joi';

export class UserReadDto {
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
  @Exclude()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Expose()
  readonly state: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  @Type(() => Number)
  @Expose({ name: 'ant_id' })
  readonly antId: number;

  @IsOptional()
  @ApiProperty()
  role: RoleReadDto;
}
