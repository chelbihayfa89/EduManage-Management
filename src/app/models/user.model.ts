export interface User {
  _id?: string;
  role?: 'admin' | 'teacher' | 'student' | 'parent';
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  password?: string;
  validated?: boolean
}
