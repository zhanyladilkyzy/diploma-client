import {Role} from './enums/role';

export class User {
  id: number;
  img: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: Role;
  email: string;
}

