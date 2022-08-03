import { RolesBuilder } from 'nest-access-control';

import { AppResourcesEnum, RoleEnum } from './core/enums';

export const roles: RolesBuilder = new RolesBuilder();

roles
  // AUTHOR:
  .grant(RoleEnum.AUTHOR)

  .readOwn([AppResourcesEnum.USER])
  //.createOwn([])
  .updateOwn([AppResourcesEnum.USER])
  .deleteOwn([AppResourcesEnum.USER])

  .readOwn([AppResourcesEnum.ROLE])
  // .createOwn([])
  // .updateOwn([])
  // .deleteOwn([])

  // Admin:
  .grant(RoleEnum.ADMIN)
  .extend(RoleEnum.AUTHOR)
  .readAny([AppResourcesEnum.USER, AppResourcesEnum.ROLE])
  .createAny([AppResourcesEnum.USER, AppResourcesEnum.ROLE])
  .updateAny([AppResourcesEnum.USER, AppResourcesEnum.ROLE])
  .deleteAny([AppResourcesEnum.USER, AppResourcesEnum.ROLE]);
