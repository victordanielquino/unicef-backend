import {
  IsString,
  IsNotEmpty,
  Length,
  IsBoolean,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'the username of user' })
  @Expose()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  // @Length(6)
  @ApiProperty()
  @Expose()
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Expose()
  readonly state: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Expose()
  readonly antId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  @Expose()
  readonly roleId: number;
}
