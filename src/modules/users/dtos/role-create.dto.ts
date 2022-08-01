import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RoleCreateDto {
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
  readonly state: string;
}
