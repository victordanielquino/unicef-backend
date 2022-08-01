import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class RoleReadDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'the id of user' })
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'the username of user' })
  readonly initial: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Exclude()
  readonly state: string;
}
