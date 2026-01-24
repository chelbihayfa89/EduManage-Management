import { Role } from "./role.type";

export interface JwtPayload {
  _id?: string;
  firstName: string;
  lastName?: string;
  role?: Role;
  iat?: number;
  exp?: number;
}
