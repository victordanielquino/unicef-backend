import {
  IsString,
  IsNotEmpty,
  Length,
  IsBoolean,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'the username of user' })
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  // @Length(6)
  @ApiProperty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly state: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly antId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly roleId: number;
}
