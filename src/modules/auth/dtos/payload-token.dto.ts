import { RoleEnum } from '../../../core/models/enums';

export interface PayloadTokenDto {
  //@IsEnum(AppRoles, {message: `Option state invalid, se esperaba: ${EnumToString(AppRoles)}`, each: true})
  id: number;
  username: string;
  roles: RoleEnum[];
}
