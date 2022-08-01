import {
  IsString,
  IsNotEmpty,
  Length,
  IsBoolean,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { RoleReadDto } from './role-read.dto';

export class UserReadDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'the id of user' })
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'the username of user' })
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Exclude()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly state: string;

  // @Expose({ name: 'ant_id' })
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  @Expose({ name: 'ant_id' })
  readonly antId: number;

  @IsOptional()
  @ApiProperty()
  role: RoleReadDto;
}
