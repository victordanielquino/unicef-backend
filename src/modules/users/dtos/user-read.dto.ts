import { IsString, IsNotEmpty, Length, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

export class UserReadDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'the username of user' })
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty()
  @Exclude()
  readonly password: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly enabled: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly state: string;

  @Expose({ name: 'ant_id' })
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly antId: string;
}
