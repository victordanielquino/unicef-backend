import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './services/users.service';
import { RolesService } from './services/roles.service';
import { UsersRolesService } from './services/users-roles.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, RolesService, UsersRolesService],
  exports: [UsersService, RolesService],
})
export class UsersModule {}
